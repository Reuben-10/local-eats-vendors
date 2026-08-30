import { Link } from 'react-router';
import styles from './Categories.module.css';

const Categories = ({ vendors = [] }) => {
    const categories = [...new Set(vendors.map((v) => v.category))];

    return (
        <section className={`py-5 ${styles.section}`} aria-label="Food categories">
            <div className="container">
                <h2 className={`fw-bold mb-4 ${styles.title}`}>Categories</h2>
                <nav aria-label="Filter vendors by category">
                    <div className={styles.pillRow}>
                        {categories.map((category) => (
                            <Link
                                key={category}
                                to={'/vendors?category=' + category}
                                className={styles.pill}
                                aria-label={'Browse ' + category + ' vendors'}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Categories;