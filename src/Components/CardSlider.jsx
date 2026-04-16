import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'

const CardSlider = ({ title, data = [] }) => {
  return (
    <Box sx={{ px: 3, py: 2 }}>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">{title}</Typography>
        <Typography sx={{ fontSize: 12 }}>See more →</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 2, overflowX: 'auto' }}>
        {data.map((item, i) => (
          <Card key={i} sx={{ minWidth: 220 }}>
            <CardMedia component="img" height="120" image={item.img} />
            <CardContent>
              <Typography variant="body2">{item.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

    </Box>
  )
}

export default CardSlider