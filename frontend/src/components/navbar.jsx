import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          EduAI
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>

        <nav
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <div className="navbar__links">
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
            <a href="#roadmaps" onClick={() => setMenuOpen(false)}>Roadmaps</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          </div>
          <div className="navbar__actions">
            <Link to="/auth" className="navbar__signin" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
            <Link to="/auth" className="navbar__button" onClick={() => setMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
