import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import VendorCard from '../components/VendorCard';
import FilterPanel from '../components/FilterPanel';
import SkeletonCard from '../components/SkeletonCard';
import { useDebounce } from '../hooks/useDebounce';
import { filterVendors, sortVendors } from '../utils/vendorUtils';
import styles from './VendorsPage.module.css';

const PAGE_SIZE = 6;

const DEFAULT_FILTERS = {
    categories: [],
    openOnly: false,
    minRating: null,
    sortKey: null,
};

const VendorsPage = ({ vendors, loading, error }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(searchParams.get('q') || '');
    const [filters, setFilters] = useState({
        categories: searchParams.getAll('category'),
        openOnly: searchParams.get('openOnly') === 'true',
        minRating: searchParams.get('minRating') ? Number(searchParams.get('minRating')) : null,
        sortKey: searchParams.get('sortKey') || null,
    });
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const debouncedSearch = useDebounce(search, 400);

    const syncToURL = (newSearch, newFilters) => {
        const params = new URLSearchParams();
        if (newSearch) params.set('q', newSearch);
        newFilters.categories.forEach((cat) => params.append('category', cat));
        if (newFilters.openOnly) params.set('openOnly', 'true');
        if (newFilters.minRating) params.set('minRating', newFilters.minRating);
        if (newFilters.sortKey) params.set('sortKey', newFilters.sortKey);
        setSearchParams(params, { replace: true });
    };

    const handleFilterChange = (key, value) => {
        const updated = { ...filters, [key]: value };
        setFilters(updated);
        setVisibleCount(PAGE_SIZE);
        syncToURL(search, updated);
    };

    const handleCategoryToggle = (category) => {
        const already = filters.categories.includes(category);
        const updated = {
            ...filters,
            categories: already
                ? filters.categories.filter((c) => c !== category)
                : [...filters.categories, category],
        };
        setFilters(updated);
        setVisibleCount(PAGE_SIZE);
        syncToURL(search, updated);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        syncToURL(e.target.value, filters);
    };

    const handleClearFilters = () => {
        setSearch('');
        setFilters(DEFAULT_FILTERS);
        setVisibleCount(PAGE_SIZE);
        setSearchParams({}, { replace: true });
    };

    const displayed = useMemo(() => {
        const filtered = filterVendors(vendors, debouncedSearch, filters);
        return sortVendors(filtered, filters.sortKey);
    }, [vendors, debouncedSearch, filters]);

    const visible = displayed.slice(0, visibleCount);
    const hasMore = visibleCount < displayed.length;

    return (
        <div className={styles.page}>

            {/* Search Bar */}
            <div className={styles.searchWrapper}>
                <div className="container">
                    <div className={styles.searchRow}>
                        <label htmlFor="vendor-search" className="visually-hidden">
                            Search vendors or cuisine
                        </label>
                        <input
                            id="vendor-search"
                            type="search"
                            className={styles.searchInput}
                            placeholder="Search vendors or cuisine..."
                            value={search}
                            onChange={handleSearchChange}
                            aria-label="Search vendors"
                        />
                        <button className={styles.searchBtn} aria-label="Submit search">
                            Search
                        </button>
                    </div>

                    <div className={`${styles.mobileFilterRow} d-flex d-lg-none`}>
                        <button
                            type="button"
                            className={styles.filterToggleBtn}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#filterOffcanvas"
                            aria-controls="filterOffcanvas"
                        >
                            ☰ Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Offcanvas */}
            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="filterOffcanvas"
                aria-labelledby="filterOffcanvasLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-bold" id="filterOffcanvasLabel">
                        Filters
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close filters"
                    />
                </div>
                <div className="offcanvas-body">
                    {!loading && (
                        <FilterPanel
                            vendors={vendors}
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            onCategoryToggle={handleCategoryToggle}
                            onClearFilters={handleClearFilters}
                        />
                    )}
                </div>
            </div>

            {/* Main Layout */}
            <div className="container">
                <div className={styles.layout}>

                    {/* Desktop Sidebar */}
                    <aside className={`${styles.sidebar} d-none d-lg-block`}>
                        <p className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px', fontSize: '13px' }}>
                            Filters
                        </p>
                        {!loading && (
                            <FilterPanel
                                vendors={vendors}
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onCategoryToggle={handleCategoryToggle}
                                onClearFilters={handleClearFilters}
                            />
                        )}
                    </aside>

                    {/* Vendor Grid */}
                    <main className={styles.grid}>

                        <div aria-live="polite" aria-atomic="true" className="visually-hidden">
                            {!loading && !error && (
                                displayed.length === 0
                                    ? 'No vendors found'
                                    : displayed.length + ' vendors found'
                            )}
                        </div>

                        {loading && (
                            <div className="row g-4">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="col-12 col-md-6 col-lg-4">
                                        <SkeletonCard />
                                    </div>
                                ))}
                            </div>
                        )}

                        {error && (
                            <div className="text-center py-5">
                                <p className="text-danger fw-semibold">
                                    Unable to load vendors. Please try again.
                                </p>
                                <button
                                    className="btn mt-2"
                                    style={{ backgroundColor: '#337357', color: '#fff', borderRadius: '999px' }}
                                    onClick={() => window.location.reload()}
                                >
                                    Retry
                                </button>
                            </div>
                        )}

                        {!loading && !error && displayed.length === 0 && (
                            <div className="text-center py-5">
                                <p className="fw-semibold text-muted">No vendors found.</p>
                                <p className="text-muted small">
                                    Try changing your search or filters.
                                </p>
                            </div>
                        )}

                        {!loading && !error && displayed.length > 0 && (
                            <>
                                <div className="row g-4">
                                    {visible.map((vendor) => (
                                        <div key={vendor.id} className="col-12 col-md-6 col-lg-4">
                                            <VendorCard vendor={vendor} />
                                        </div>
                                    ))}
                                </div>

                                {hasMore && (
                                    <div className="text-center mt-5">
                                        <button
                                            className="btn btn-lg px-5 py-3 fw-semibold"
                                            style={{ backgroundColor: '#337357', color: '#fff', borderRadius: '999px' }}
                                            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                                            aria-label="Load more vendors"
                                        >
                                            Load More
                                        </button>
                                    </div>
                                )}
                            </>
                        )}

                    </main>
                </div>
            </div>
        </div>
    );
};

export default VendorsPage;