import './Navbar.css'

const navItems = ['Home', 'Categories', 'IR Prime', 'Events', 'Bookstore', 'Newsletter', 'Video']

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-top">

        <div className="left-section">

          
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

        
          <div className="menu">
            {navItems.map((item, i) => (
              <span key={i} className={`menu-item ${i === 0 ? 'active' : ''}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

      
        <div className="date">Friday, 30 June 2023</div>

      </div>

      
      <div className="navbar-bottom">
        {[
          'Fashion & Lifestyle',
          'Beauty & Wellness',
          'Food & Beverage',
          'Consumer Durables & IT',
          'Entertainment',
          'Home Decor & Furnishing',
          'Specialty Retail'
        ].map((tag, i, arr) => (
          <span key={i} className="tag">
            {tag}
            {i < arr.length - 1 && <span className="dot">•</span>}
          </span>
        ))}
      </div>

    </div>
  )
}

export default Navbar