# Local Eats Africa — Vendor Listing App

A responsive food vendor listing application built for the Local Eats Africa Frontend Developer Internship assessment.

---

## Project Description

A two-page web application that allows users to browse, search, filter, and sort food vendors on the Local Eats Africa platform. Vendor data is retrieved from a REST API and displayed in a clean, responsive interface.

---

## Technologies Used

- React.js (via Vite)
- Bootstrap 5
- Axios
- JavaScript
- React Router
- React Icons
- CSS Modules

---

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Reuben-10/local-eats-vendors.git
   cd local-eats-vendors
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

---

## How to Run

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## API Used

**Endpoint:**
```
GET https://localeats.africa/api/v1/frontend-assessment/vendors
```

- Authentication: Not required
- Returns an array of vendor objects including store name, category, rating, delivery fee, delivery time, open status, and image

---

## Assumptions & Decisions

- **Two-page layout** — Built a homepage with a hero section, category pills, top-rated vendors preview, and a "How It Works" section in addition to the required vendor listing page, to better represent a real-world application.
- **Client-side filtering and sorting** — Since the API returns all vendors in a single request, all search, filter, and sort operations are handled on the client using `useMemo` for performance.
- **Multi-category filtering** — Users can select multiple categories simultaneously. Filters are synced to the URL so they persist on refresh and can be shared as links.
- **sessionStorage caching** — API response is cached in sessionStorage to avoid unnecessary re-fetches on page navigation. Cache clears when the browser tab is closed.
- **Minimum loading delay** — A 500ms minimum loading time is enforced so skeleton cards are always visible long enough to be meaningful rather than flashing briefly.
- **Load More pagination** — Vendors are shown 6 at a time with a Load More button. Pagination resets intentionally on filter or search change so users always see results from the top.
- **pnpm** — Used as the package manager for faster installs and efficient disk usage.

---

## Additional Libraries

| Library | Purpose |
|---|---|
| `react-router` | Client-side routing between the homepage and vendors page |
| `react-icons` | Consistent, accessible icon set (social icons, star rating, filter icon) |
| CSS Modules | Scoped component styles to avoid class name conflicts |

---

## Submission Details

- **Framework:** React.js
- **Development Time:** Approximately 2 hours 30 minutes
- **Additional Libraries/Tools:** Axios, React Router, React Icons, Vite, pnpm, Vercel