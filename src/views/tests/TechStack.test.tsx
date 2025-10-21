import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@test/test-utils';
import TechStack from '../TechStack';
import stack from '../TechStack/stack.json';

describe('TechStack', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const { container: c } = renderWithProviders(<TechStack />);
    container = c;
  });

  describe('rendering', () => {
    it('should render techstack section', () => {
      const section = container.querySelector('section#techstack');
      expect(section).toBeInTheDocument();
    });

    it('should render all stack items', () => {
      const papers = container.querySelectorAll('.MuiPaper-root');
      expect(papers.length).toBe(stack.length);
    });

    it('should display stack item names', () => {
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('should display icons for each item', () => {
      const images = container.querySelectorAll('img');
      expect(images.length).toBe(stack.length);
    });

    it('should display status chips', () => {
      const chips = container.querySelectorAll('.MuiChip-root');
      expect(chips.length).toBeGreaterThan(0);
    });
  });

  describe('stack item details', () => {
    it('should show active status for active items', () => {
      const activeChips = container.querySelectorAll('.MuiChip-colorPrimary');
      expect(activeChips.length).toBeGreaterThan(0);
    });

    it('should display years of experience when available', () => {
      const yearText = container.querySelector('.MuiTypography-subtitle2');
      expect(yearText).toBeInTheDocument();
    });

    it('should display descriptions for each item', () => {
      const descriptions = container.querySelectorAll('.MuiTypography-body1');
      expect(descriptions.length).toBe(stack.length);
    });
  });

  describe('accessibility', () => {
    it('should use semantic section element', () => {
      const section = container.querySelector('section#techstack');
      expect(section).toBeInTheDocument();
    });

    it('should have alt text for all icons', () => {
      const images = container.querySelectorAll('img');
      images.forEach((img) => {
        expect(img).toHaveAttribute('alt');
      });
    });

    it('should have accessible external links', () => {
      const externalLinks = container.querySelectorAll('a[target="_blank"]');
      externalLinks.forEach((link) => {
        expect(link).toHaveAttribute('rel', 'noopener');
      });
    });
  });

  describe('layout', () => {
    it('should have scrollable container', () => {
      const scrollContainer = container.querySelector('section#techstack > div');
      expect(scrollContainer).toBeInTheDocument();
      expect(scrollContainer).toHaveStyle({ overflowX: 'auto' });
    });
  });
});
