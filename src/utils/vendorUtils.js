export function filterVendors(vendors, search, filters) {
  return vendors.filter((vendor) => {
    // Search by name or category
    if (search) {
      const term = search.toLowerCase();
      const matchesName = vendor.store_name.toLowerCase().includes(term);
      const matchesCategory = vendor.category.toLowerCase().includes(term);
      if (!matchesName && !matchesCategory) return false;
    }

    if (filters.categories && filters.categories.length > 0) {
      if (!filters.categories.includes(vendor.category)) return false;
    }

    // Filter by open status
    if (filters.openOnly && !vendor.open_status) return false;

    // Filter by minimum rating
    if (filters.minRating && vendor.rating < filters.minRating) return false;

    return true;
  });
}

export function sortVendors(vendors, sortKey) {
  const list = [...vendors];

  if (sortKey === 'rating') return list.sort((a, b) => b.rating - a.rating);
  if (sortKey === 'fee') return list.sort((a, b) => a.delivery_fee - b.delivery_fee);
  if (sortKey === 'time') return list.sort((a, b) => a.delivery_time - b.delivery_time);

  return list;
}