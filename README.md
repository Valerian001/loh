
# E-Commerce Product Listing App

This is a mobile e-commerce product listing application built with **Expo Router** and **React Native (TypeScript)**. It features **filtering**, **sorting**, and **pagination** for a seamless and responsive shopping experience.

---

## Features
- Product browsing with cards
- Filter by category (e.g., Electronics, Fashion)
- Sort by name or price
- Paginate products (6 per page)
- Responsive layout using Expo Router
- Modular structure with reusable components
- State managed with context API

---

## Tech Stack
- **React Native**
- **Expo + Expo Router**
- **TypeScript**
- **Context API** for state management

---

## Project Structure
\`\`\`
.
├── app/
│   └── index.tsx              # Main product listing screen
├── components/
│   ├── FilterModal.tsx        # Category filter controls
│   ├── ProductCard.tsx        # Product UI card
│   ├── SortDropdown.tsx       # Sorting options
│   └── PaginationControls.tsx # Page navigation
├── context/
│   └── ProductContext.tsx     # Shared state & logic
├── data/
│   └── products.json          # Mock product data
├── types/
│   └── Product.d.ts           # Product interface type (optional)
└── README.md
\`\`\`

---

## Getting Started

### 1. Clone the repo
\`\`\`bash
git clone https://github.com/Valerian001/loh.git
cd ecommerce-listing-react-native
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Run the app
\`\`\`bash
npx expo start
\`\`\`

---

## Demo Video
- Page navigation (pagination)
- Filtering by category
- Sorting
- Overall responsiveness

https://youtube.com/shorts/t3bFRi_N3eQ?si=vqDPuV-Iszzl1liF
