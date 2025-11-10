import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import PlayCircle from '@mui/icons-material/PlayCircle'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import * as styles from './Resume.styles'

interface ResumeProps {
  description: string
  url: string
  cover: { src: string; alt: string }
  game: () => React.ReactElement
  onOpenGame: () => void
}

const Resume = ({ description, url, cover, game: Game, onOpenGame }: ResumeProps) => (
  <Paper sx={styles.container}>
    <Box sx={styles.imageWrapper} onClick={onOpenGame}>
      <img
        src={cover.src}
        alt={cover.alt}
        style={{
          maxWidth: '100%',
          height: '300px',
        }}
      />
      <Box className="play-icon" sx={styles.playIconBox}>
        <PlayCircle sx={styles.playIcon} />
      </Box>
    </Box>
    <Typography>
      {description} (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        Wikipedia
      </Link>
      )
    </Typography>
    <Game />
  </Paper>
)

export default Resume
