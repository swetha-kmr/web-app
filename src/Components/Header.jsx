import SearchIcon from '@mui/icons-material/Search'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 24px', borderBottom: '1px solid #eee', backgroundColor: 'white' }}>

     
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '4px 10px' }}>
        <SearchIcon style={{ color: 'gray', fontSize: 18, marginRight: 6 }} />
        <input
          type="text"
          placeholder="Search here..."
          style={{ border: 'none', outline: 'none', fontSize: 14, color: 'gray' }}
        />
      </div>


     
      <img src={logo} alt="Logo" style={{ height: 80, objectFit: 'contain' }} />

      
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '6px 16px', fontSize: 12, cursor: 'pointer', textTransform: 'uppercase' }}>
          Subscribe
        </button>
        <span style={{ fontSize: 14, cursor: 'pointer', color: 'gray' }}>Sign In</span>
      </div>

    </div>
  )
}

export default Header