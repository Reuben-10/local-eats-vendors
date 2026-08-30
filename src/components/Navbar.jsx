import { NavLink } from 'react-router';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={`position-fixed top-0 start-0 end-0 ${styles.header}`}>
      <div className="container py-2">
        <nav className={`navbar navbar-expand-lg px-3 ${styles.navbar}`}>
          <NavLink className="navbar-brand fw-bold fs-5 d-flex align-items-center gap-2" to="/">
            <img
              src="https://localeats.africa/front/img/new-logo.png"
              alt="Local Eats Africa"
              className={styles.logo}
            />
            <span className={styles.brand}>Local Eats Africa</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-medium ${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-medium ${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                  to="/vendors"
                >
                  Vendors
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;