import Hero from '../components/Hero';
import Categories from '../components/Categories';
import TopVendors from '../components/TopVendors';
import HowItWorks from '../components/HowItWorks';

const HomePage = ({ vendors, loading, error }) => {
  return (
    <main>
      <Hero />

      {loading && (
        <>
          <section className="py-5 text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </section>
          <HowItWorks />
        </>
      )}

      {error && (
        <>
          <section className="py-5 text-center">
            <p className="text-danger fw-semibold">
              Unable to load vendor data. Please check your connection and try again.
            </p>
            <button
              className="btn mt-2"
              style={{ backgroundColor: '#337357', color: '#fff', borderRadius: '999px' }}
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </section>
          <HowItWorks />
        </>
      )}

      {!loading && !error && (
        <>
          <Categories vendors={vendors} />
          <TopVendors vendors={vendors} />
          <HowItWorks />
        </>
      )}
    </main>
  );
};

export default HomePage;