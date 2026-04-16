import { Box, Grid, Typography, CardMedia } from '@mui/material'
import main from '../assets/main.png'
import ad from '../assets/ad.png'
import img1 from '../assets/hotspot.png'
import img2 from '../assets/hero.png'
import img3 from '../assets/shipping.png'
import img4 from '../assets/Banner-img.png'
import img5 from '../assets/ai.png'

const WebSpecials = () => {
  return (
    <Box sx={{ py: 3, px: '30px', background: '#f5f5f5' }}>

    
      <Typography variant="h6" sx={{ mb: 2 }}>
        Web Specials
      </Typography>

      <Grid container spacing={3}>

        
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              position: 'relative',
              cursor: 'pointer',
              borderRadius: 2,
              overflow: 'hidden',

              '&:hover img': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image={main}
              sx={{
                width: '100%',
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
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
            }}>
              <Typography variant="body2" fontWeight={600}>
                Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
              </Typography>
              <Typography variant="caption">Rahul Gandhi</Typography>
            </Box>
          </Box>
        </Grid>

        
        <Grid item xs={12} md={4}>
          {[
            'Cinema industry welcomes lowering GST rates',
            'Patanjali Ayurved to sell 7% stake in Patanjali',
            'Select Citywalk opens 4 new stores in June',
            'Govt imposes import restrictions on certain gold',
            'Joom Marketplace offers a global window for sellers',
            'Select Citywalk opens 4 new stores in June',
            'Govt imposes import restrictions on certain gold'
          ].map((text, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                mb: 1.2,
                cursor: 'pointer',
                transition: '0.2s',

                '&:hover': {
                  transform: 'translateX(5px)'
                },

                '&:hover p': {
                  color: 'red'
                }
              }}
            >
              <Typography sx={{ color: 'red', mr: 1 }}>•</Typography>
              <Typography variant="body2">{text}</Typography>
            </Box>
          ))}
        </Grid>

      
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            height="220"
            image={ad}
            sx={{
              borderRadius: 2,
              width: '100%',
              cursor: 'pointer',
              transition: '0.3s',

              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          />
        </Grid>

      </Grid>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        mt: 2,
        pb: 2,
        borderBottom: '1px solid #ddd'
      }}>
        {[
          'B2B managed marketplace The Yarn',
          'Sequoia Capital exits Go Fashion',
          'B2B managed marketplace The Yarn',
          'Sequoia Capital exits Go Fashion'
        ].map((t, i) => (
          <Typography
            key={i}
            variant="body2"
            sx={{
              cursor: 'pointer',
              transition: '0.2s',

              '&:hover': {
                color: 'red'
              }
            }}
          >
            <span style={{ color: 'red' }}>•</span> {t}
          </Typography>
        ))}
      </Box>

      
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {[img1, img2, img3, img4, img5].map((img, i) => (
          <Grid item xs={6} sm={4} md={2} key={i}>
            <Box
              sx={{
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                transition: '0.3s',

                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={img}
                sx={{
                  width: '100%',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  px: 0.5,
                  transition: '0.2s',

                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Sample news title here
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}

export default WebSpecials