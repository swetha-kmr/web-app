import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

import hotspot from '../assets/hotspot.png'
import ai from '../assets/ai.png'
import shipping from '../assets/shipping.png'

const data = [
  {
    img: hotspot,
    tag: 'HOTSPOTS',
    title: 'Luxury hotspots: 5 most expensive high streets in the..'
  },
  {
    img: ai,
    tag: 'AI',
    title: '5 ways to leverage the power of ChatGPT in retail'
  },
  {
    img: shipping,
    tag: 'SHIPPING',
    title: 'Reliance to open 250 Azorte stores in 2–3 years'
  }
]

const TopStories = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        p: 3,
        backgroundColor: '#f5f5f5'
      }}
    >
      {data.map((item, i) => (
        <Card
          key={i}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            p: 1.5,
            borderRadius: 2,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 3,
              cursor: 'pointer'
            }
          }}
        >
          <CardMedia
            component="img"
            image={item.img}
            alt={item.tag}
            sx={{
              width: 90,
              height: 70,
              borderRadius: 1
            }}
          />

          <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
            <Typography
              variant="caption"
              sx={{ color: 'red', fontWeight: 600 }}
            >
              {item.tag}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: '#333', lineHeight: 1.4 }}
            >
              {item.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default TopStories