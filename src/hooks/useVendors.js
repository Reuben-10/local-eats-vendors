import { useState, useEffect } from 'react';
import { fetchVendors } from '../api/vendorApi';

const MIN_LOADING_MS = 500;

async function minDelay(ms = MIN_LOADING_MS) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function useVendors() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      
      const cached = sessionStorage.getItem('lea_vendors');

      if (cached && cached !== 'undefined' && cached !== 'null') {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            await minDelay();
            setVendors(parsed);
            setLoading(false);
            return;
          }
        } catch {
          sessionStorage.removeItem('lea_vendors');
        }
      }

      try {
        await minDelay();
        const data = await fetchVendors();
        if (data) {
          sessionStorage.setItem('lea_vendors', JSON.stringify(data));
          setVendors(data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { vendors, loading, error };
}