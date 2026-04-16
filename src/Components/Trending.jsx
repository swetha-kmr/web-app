import { Box, Chip, Typography } from '@mui/material'

const Trending = () => {
  const tags = [
    'Rahul Gandhi', 'Meta', 'E-Commerce', 'Fashion',
    'Live Cricket Score', 'Adipurush', 'Myntra'
  ]

  return (
    <Box sx={{ px: 3, py: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Trending
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {tags.map((tag, i) => (
          <Chip key={i} label={tag} variant="outlined" />
        ))}
      </Box>
    </Box>
  )
}

export default Trending