import AdBanner from './Components/Adbanner'
import { Box } from '@mui/material' 
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import TopStories from './Components/TopStories'
import NewsSection from './Components/NewsSection'
import Trending from './Components/Trending'
import WebSpecials from './Components/WebSpecials'
import CardSlider from './Components/CardSlider'

function App() {
  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh' }}>
      <AdBanner />
      <Header />
      <Navbar/>
      <TopStories/>
      <NewsSection/>
      <WebSpecials/>
      <Trending/>
      <CardSlider/>
    </Box>
  )
}

export default App