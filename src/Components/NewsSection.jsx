import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material'

import mainImg from '../assets/ai.png'
import news1 from '../assets/Banner-img.png'
import news2 from '../assets/hotspot.png'
import list1 from '../assets/shipping.png'
import list2 from '../assets/ai.png'
import list3 from '../assets/ai.png'

const NewsSection = () => {
  return (
    <Box sx={{ py: 3, px: '30px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={8}>

          <Card
            sx={{
              position: 'relative',
              borderRadius: 3,
              overflow: 'hidden',
              cursor: 'pointer',

              '&:hover img': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image={mainImg}
              sx={{
                transition: '0.4s'
              }}
            />

            <Box sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              p: 2,
              color: '#fff',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
            }}>
              <Typography
                variant="caption"
                sx={{
                  background: 'red',
                  px: 1,
                  py: 0.5,
                  fontWeight: 600
                }}
              >
                IN FOCUS
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 1,
                  transition: '0.3s'
                }}
              >
                Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
              </Typography>

              <Typography variant="caption">
                Rahul Gandhi
              </Typography>
            </Box>
          </Card>

         
          <Box sx={{ mt: 2 }}>
            {[list1, list2, list3].map((img, i) => (
              <Card
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  p: 1,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: '0.3s',

                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  sx={{
                    width: 100,
                    height: 70,
                    borderRadius: 1,
                    transition: '0.3s',

                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />

                <CardContent sx={{ py: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: 'red', fontWeight: 600 }}
                  >
                    {i === 1 ? 'FOOD & BEVERAGE' : 'SELECT CITYWALK'}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      transition: '0.2s',

                      '&:hover': {
                        color: 'red'
                      }
                    }}
                  >
                    {i === 0 && 'Wow! Momo Foods enters Bhopal with Wow!'}
                    {i === 1 && 'KFC opens another outlet in Punjab'}
                    {i === 2 && 'FNP appoints Ashish Goel'}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

        </Grid>

        <Grid item xs={12} md={4}>

          <Typography variant="h6" sx={{ mb: 2 }}>
            Latest News
          </Typography>

          {[news1, news2].map((img, i) => (
            <Card
              key={i}
              sx={{
                mb: 2,
                borderRadius: 2,
                cursor: 'pointer',
                overflow: 'hidden',

                '&:hover img': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={img}
                sx={{ transition: '0.3s' }}
              />

              <CardContent>
                <Typography
                  variant="body2"
                  sx={{
                    transition: '0.2s',

                    '&:hover': {
                      color: 'red'
                    }
                  }}
                >
                  {i === 0
                    ? "Unwrapping the Archies' reinvention plan"
                    : 'How AI is enhancing stores'}
                </Typography>
              </CardContent>
            </Card>
          ))}

          
          <Box sx={{ mt: 2 }}>
            {[
              'Croma opens 58 outlets in 6, Croma retails more than 16,000',
              'Select Citywalk opens 4 new stores in June',
              'Croma opens 58 outlets in 6, Croma retails more than 16,000',
              'Select Citywalk opens 4 new stores in June',
              'Croma opens 58 outlets in 6, Croma retails more than 16,000',
              'Select Citywalk opens 4 new stores in June'
            ].map((text, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{
                  mb: 1,
                  cursor: 'pointer',
                  transition: '0.2s',

                  '&:hover': {
                    color: 'red',
                    transform: 'translateX(5px)'
                  }
                }}
              >
                • {text}
              </Typography>
            ))}
          </Box>

        </Grid>

      </Grid>
    </Box>
  )
}

export default NewsSection