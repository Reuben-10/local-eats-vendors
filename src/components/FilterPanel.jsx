import { FaCheck } from 'react-icons/fa';
import styles from './FilterPanel.module.css';

const RATINGS = [
    { label: 'Any', value: null },
    { label: '3+', value: 3 },
    { label: '4+', value: 4 },
];

const FilterPanel = ({ vendors = [], filters, onFilterChange, onCategoryToggle, onClearFilters }) => {
    const categories = [...new Set(vendors.map((v) => v.category))];

    return (
        <div>
            <fieldset className={styles.section}>
                <legend className={styles.sectionTitle}>Category</legend>
                <div className={styles.categoryList}>
                    {categories.map((cat) => {
                        const isActive = filters.categories.includes(cat);
                        return (
                            <button
                                key={cat}
                                className={`${styles.categoryBtn} ${isActive ? styles.categoryBtnActive : ''}`}
                                onClick={() => onCategoryToggle(cat)}
                                aria-pressed={isActive}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </fieldset>

            {/* Availability */}
            <fieldset className={styles.section}>
                <legend className={styles.sectionTitle}>Availability</legend>
                <button
                    className={`${styles.toggleBtn} ${filters.openOnly ? styles.toggleBtnActive : ''}`}
                    onClick={() => onFilterChange('openOnly', !filters.openOnly)}
                    aria-pressed={filters.openOnly}
                >
                    {filters.openOnly ? <><FaCheck size={11} /> Open Now Only</> : 'Open Now Only'}
                </button>
            </fieldset>

            {/* Min Rating */}
            <fieldset className={styles.section}>
                <legend className={styles.sectionTitle}>Min Rating</legend>
                <div className={styles.ratingRow}>
                    {RATINGS.map((r) => (
                        <button
                            key={r.label}
                            className={`${styles.ratingBtn} ${filters.minRating === r.value ? styles.ratingBtnActive : ''}`}
                            onClick={() => onFilterChange('minRating', r.value)}
                            aria-pressed={filters.minRating === r.value}
                            aria-label={r.value ? 'Minimum rating ' + r.label : 'Any rating'}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            {/* Sort By */}
            <fieldset className={styles.section}>
                <legend className={styles.sectionTitle}>Sort By</legend>
                {[
                    { label: 'Highest Rating', value: 'rating' },
                    { label: 'Lowest Delivery Fee', value: 'fee' },
                    { label: 'Fastest Delivery', value: 'time' },
                ].map((s) => (
                    <button
                        key={s.value}
                        className={`${styles.categoryBtn} m-1 ${filters.sortKey === s.value ? styles.categoryBtnActive : ''}`}
                        onClick={() => onFilterChange('sortKey', filters.sortKey === s.value ? null : s.value)}
                        aria-pressed={filters.sortKey === s.value}
                    >
                        {s.label}
                    </button>
                ))}
            </fieldset>

            {/* Clear Filters */}
            <button
                className={styles.clearBtn}
                onClick={onClearFilters}
                aria-label="Clear all filters"
            >
                Clear Filters
            </button>

        </div>
    );
};

export default FilterPanel;