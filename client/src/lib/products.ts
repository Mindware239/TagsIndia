import type { Product } from '@shared/schema';

export const PRODUCT_CATEGORIES = [
  { value: 'all', label: 'All Products' },
  { value: 'clothing', label: 'Clothing Tags' },
  { value: 'women', label: "Women's Tags" },
  { value: 'jewelry', label: 'Jewelry Tags' },
  { value: 'rfid', label: 'RFID Tags' },
] as const;

export const getCategoryDisplayName = (category: string): string => {
  const categoryItem = PRODUCT_CATEGORIES.find(cat => cat.value === category);
  return categoryItem?.label || category;
};

export const formatPrice = (price: string | number): string => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return `$${numPrice.toFixed(2)}`;
};
