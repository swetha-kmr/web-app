import bannerImg from '../assets/banner-img.png'

const AdBanner = () => {
  return (
    <div style={{  display: 'flex', justifyContent: 'center', padding: ' 0' }}>
      <img src={bannerImg} alt="Advertisement" style={{ height: '280px', objectFit: 'cover', }} />
    </div>
  )
}

export default AdBanner