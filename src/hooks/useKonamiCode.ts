import { useEffect } from 'react';

const DIRECTIONS = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
} as const;

// Gesture sequence without 'b' and 'a' for touch
const KONAMI_GESTURES = [
  DIRECTIONS.UP,
  DIRECTIONS.UP,
  DIRECTIONS.DOWN,
  DIRECTIONS.DOWN,
  DIRECTIONS.LEFT,
  DIRECTIONS.RIGHT,
  DIRECTIONS.LEFT,
  DIRECTIONS.RIGHT,
] as const;

const KONAMI = [...KONAMI_GESTURES, 'b', 'a'] as const;

export function useKonamiCode(onTrigger: () => void) {
  useEffect(() => {
    let keyIndex = 0;
    let gestureIndex = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    const minSwipeDistance = 50;

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[keyIndex]) {
        keyIndex++;
        if (keyIndex === KONAMI.length) {
          onTrigger();
          keyIndex = 0;
        }
      } else {
        keyIndex = 0;
      }
    };

    const touchStartHandler = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    };

    // Touch end handler - detect swipe direction
    const touchEndHandler = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      if (absDeltaX < minSwipeDistance && absDeltaY < minSwipeDistance) {
        return;
      }

      let direction = '';

      if (absDeltaX > absDeltaY) {
        direction = deltaX > 0 ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT;
      } else {
        direction = deltaY > 0 ? DIRECTIONS.DOWN : DIRECTIONS.UP;
      }

      if (direction === KONAMI_GESTURES[gestureIndex]) {
        gestureIndex++;
        if (gestureIndex === KONAMI_GESTURES.length) {
          onTrigger();
          gestureIndex = 0;
        }
      } else {
        gestureIndex = 0;
      }
    };

    window.addEventListener('keydown', keyHandler);
    window.addEventListener('touchstart', touchStartHandler, { passive: true });
    window.addEventListener('touchend', touchEndHandler, { passive: true });

    return () => {
      window.removeEventListener('keydown', keyHandler);
      window.removeEventListener('touchstart', touchStartHandler);
      window.removeEventListener('touchend', touchEndHandler);
    };
  }, [onTrigger]);
}
