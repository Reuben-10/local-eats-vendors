import { Link } from 'react-router';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Hero banner">
      <div className={styles.overlay}>
        <div className="container text-center text-white py-5">
          <h1 className="fw-bold display-4 mb-3">
            Order from the best local vendors near you
          </h1>
          <p className="lead mb-5 text-white-50">
            Fast delivery from your favourite restaurants
          </p>
          <Link
            to="/vendors"
            className={`btn btn-lg px-5 py-3 fw-semibold ${styles.cta}`}
            aria-label="Browse all vendors"
          >
            Browse Vendors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;