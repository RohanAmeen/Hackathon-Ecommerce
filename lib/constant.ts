export type Product = {
    id: string
    name: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    image: string
    isNew?: boolean
  }
  
  export const NEW_ARRIVALS: Product[] = [
    {
      id: '1',
      name: 'T-shirt with Tape Details',
      price: 120,
      rating: 4.5,
      reviews: 145,
      image: '/assets/Products/product (7).png',
      isNew: true
    },
    {
      id: '2',
      name: 'Skinny Fit Jeans',
      price: 240,
      originalPrice: 260,
      rating: 4.5,
      reviews: 250,
      image: '/assets/Products/product (1).png',
      isNew: true
    },
    {
      id: '3',
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
      reviews: 180,
      image: '/assets/Products/product (3).png',
      isNew: true
    },
    {
      id: '4',
      name: 'Sleeve Striped T-shirt',
      price: 130,
      originalPrice: 150,
      rating: 4.5,
      reviews: 240,
      image: '/assets/Products/product (6).png',
      isNew: true
    }
  ]
  
  export const TOP_SELLING: Product[] = [
    {
      id: '5',
      name: 'Vertical Striped Shirt',
      price: 212,
      originalPrice: 232,
      rating: 4.5,
      reviews: 145,
      image: '/assets/Products/product (8).png'
    },
    {
      id: '6',
      name: 'Orange Graphic T-shirt',
      price: 145,
      rating: 4.5,
      reviews: 245,
      image: '/assets/Products/product (2).png'
    },
    {
      id: '7',
      name: 'Loose Fit Bermuda Shorts',
      price: 80,
      rating: 4.5,
      reviews: 180,
      image: '/assets/Products/product (4).png'
    },
    {
      id: '8',
      name: 'Faded Skinny Jeans',
      price: 210,
      rating: 4.5,
      reviews: 140,
      image: '/assets/Products/product (5).png'
    }
  ]
  
  