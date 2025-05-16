// context/ProductContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import productsData from '../data/products.json';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export type Filter = {
  category?: string;
  priceRange?: [number, number];
};

type SortOption = 'name' | 'priceLowToHigh' | 'priceHighToLow';

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  filters: Filter;
  sortOption: SortOption;
  currentPage: number;
  setFilters: (filters: Filter) => void;
  setSortOption: (option: SortOption) => void;
  setCurrentPage: (page: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(productsData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [filters, setFilters] = useState<Filter>({});
  const [sortOption, setSortOption] = useState<SortOption>('name');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const PRODUCTS_PER_PAGE = 6;

  useEffect(() => {
    let updated = [...products];

    // Filtering
    if (filters.category) {
      updated = updated.filter(p => p.category === filters.category);
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      updated = updated.filter(p => p.price >= min && p.price <= max);
    }

    // Sorting
    if (sortOption === 'name') {
      updated.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'priceLowToHigh') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighToLow') {
      updated.sort((a, b) => b.price - a.price);
    }

    // Pagination
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;

    setFilteredProducts(updated.slice(start, end));
  }, [filters, sortOption, currentPage, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        filters,
        sortOption,
        currentPage,
        setFilters,
        setSortOption,
        setCurrentPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProductContext must be used within a ProductProvider');
  return context;
};
