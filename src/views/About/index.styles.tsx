export const introPaper = {
  p: 3,
  bgcolor: 'action.hover',
}

export const highlightsGrid = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(4, 1fr)',
  },
  gap: 2,
}

export const highlightPaper = {
  p: 2,
  border: 1,
  borderColor: 'divider',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'primary.main',
    boxShadow: 2,
  },
}

export const highlightIconBox = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
}

export const iconColor = {
  color: 'primary.main',
}

export const caption = {
  fontWeight: 600,
}

export const skillsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1,
}

export const funFactPaper = {
  p: 3,
  bgcolor: 'action.hover',
}

export const funFactText = {
  fontStyle: 'italic',
}

export const greeting = {
  fontWeight: 600,
}

export const skillsTitle = {
  fontWeight: 600,
}
