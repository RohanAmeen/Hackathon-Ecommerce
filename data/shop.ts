import { Product, Filter } from '../types/shop'

export const products: Product[] = [
  {
    id: '1',
    name: 'Student Graphic T-shirt',
    price: 145,
    originalPrice: 180,
    rating: 4.5,
    reviews: 121,
    image: '/assets/Products/product (7).png',
    category: 'T-shirts'
  },
  {
    id: '2',
    name: 'Polo with Taping Details',
    price: 180,
    originalPrice: 210,
    rating: 4.2,
    reviews: 45,
    image: '/assets/Products/product (1).png',
    category: 'Polos'
  },
  {
    id: '3',
    name: 'Black Striped T-shirt',
    price: 120,
    originalPrice: 150,
    rating: 4.8,
    reviews: 67,
    image: '/assets/Products/product (2).png',

    category: 'T-shirts'
  },
  {
    id: '4',
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 280,
    rating: 4.3,
    reviews: 156,
    image: '/assets/Products/product (3).png',
    category: 'Jeans'
  },
  {
    id: '5',
    name: 'Checkered Shirt',
    price: 180,
    originalPrice: 220,
    rating: 4.6,
    reviews: 83,
    image: '/assets/Products/product (4).png',
    category: 'Shirts'
  },
  {
    id: '6',
    name: 'Sleeve Striped T-shirt',
    price: 180,
    originalPrice: 160,
    rating: 4.4,
    reviews: 91,
    image: '/assets/Products/product (5).png',
    category: 'T-shirts'
  },
  {
    id: '7',
    name: 'Vertical Striped Shirt',
    price: 175,
    originalPrice: 195,
    rating: 4.7,
    reviews: 102,
    image: '/assets/Products/product (6).png',
    category: 'Shirts'
  },
  {
    id: '8',
    name: 'Orange Graphic T-shirt',
    price: 145,
    originalPrice: 165,
    rating: 4.5,
    reviews: 73,
    image: '/assets/Products/product (7).png',
    category: 'T-shirts'
  },
]

export const filters: Filter[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { id: 'tshirts', label: 'T-shirts', value: 'T-shirts' },
      { id: 'polos', label: 'Polos', value: 'Polos' },
      { id: 'shirts', label: 'Shirts', value: 'Shirts' },
      { id: 'jeans', label: 'Jeans', value: 'Jeans' },
      { id: 'shorts', label: 'Shorts', value: 'Shorts' },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { id: 'xs', label: 'XS', value: 'xs' },
      { id: 's', label: 'S', value: 's' },
      { id: 'm', label: 'M', value: 'm' },
      { id: 'l', label: 'L', value: 'l' },
      { id: 'xl', label: 'XL', value: 'xl' },
    ],
  },
]

export const colors = [
  { id: 'red', value: '#FF0000' },
  { id: 'blue', value: '#0000FF' },
  { id: 'green', value: '#00FF00' },
  { id: 'yellow', value: '#FFFF00' },
  { id: 'purple', value: '#800080' },
  { id: 'orange', value: '#FFA500' },
]

