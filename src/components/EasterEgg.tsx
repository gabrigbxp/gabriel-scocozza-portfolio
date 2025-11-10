import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import { useKonamiCode } from '@hooks/useKonamiCode'

const EasterEgg = () => {
  const [showToasty, setShowToasty] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}toasty.m4a`)
    audioRef.current.load()

    const img = new Image()
    img.src = `${import.meta.env.BASE_URL}toasty.png`

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useKonamiCode(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {
        // eslint-disable-next-line no-console
        console.error('Failed to play Easter Egg audio')
      })
    }

    setShowToasty(true)
    setTimeout(() => {
      setShowToasty(false)
    }, 800)
  })

  return (
    <Box
      component="img"
      src={`${import.meta.env.BASE_URL}toasty.png`}
      alt="Toasty!"
      sx={{
        position: 'fixed',
        bottom: 20,
        right: showToasty ? 20 : -300,
        width: 250,
        height: 'auto',
        zIndex: 9999,
        transition: 'right 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        pointerEvents: 'none',
      }}
    />
  )
}

export default EasterEgg
