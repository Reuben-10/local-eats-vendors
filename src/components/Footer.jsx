import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={`${styles.footer} py-5`}>
      <div className="container">
        <div className="row g-4">

          {/* Brand + Social */}
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src="https://localeats.africa/front/img/new-logo.png"
                alt="Local Eats Africa"
                style={{ height: '40px' }}
              />
              <span className={`fw-bold fs-5 ${styles.brand}`}>Local Eats Africa</span>
            </div>

            <div className="d-flex gap-2 mb-3">
              <a href="#" aria-label="Facebook" className={styles.socialBtn}>
                <FaFacebook />
              </a>
              <a href="#" aria-label="X / Twitter" className={styles.socialBtn}>
                <FaXTwitter />
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialBtn}>
                <FaYoutube />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialBtn}>
                <FaInstagram />
              </a>
            </div>

            <p className={styles.copyright}>© 2026 Local Eats Africa</p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {['Customers Privacy', 'Vendors Privacy', 'Terms', 'Become a Rider', 'Career', 'Staff'].map((link) => (
                <li key={link}>
                  <a href="#" className={styles.quickLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-4">
            <h6 className="fw-bold mb-3">Get Exclusive Deals In Your Inbox</h6>
            <div className="d-flex">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Email address for newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                className={styles.subscribeInput}
                placeholder="Your email"
              />
              <button className={styles.subscribeBtn}>Subscribe</button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;