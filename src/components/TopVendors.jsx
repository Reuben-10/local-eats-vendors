import { Link } from 'react-router';
import VendorCard from './VendorCard';
import styles from './TopVendors.module.css';

const TopVendors = ({ vendors = [] }) => {
    const topVendors = [...vendors]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    return (
        <section className={`py-5 ${styles.section}`}>
            <div className="container">
                <h2 className={`fw-bold mb-5 ${styles.title}`}>Top Rated Vendors</h2>

                <div className="row g-4">
                    {topVendors.map((vendor) => (
                        <div key={vendor.id} className="col-12 col-md-6 col-lg-4">
                            <VendorCard vendor={vendor} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link to="/vendors" className={styles.seeAllBtn}>
                        See All Vendors
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TopVendors;