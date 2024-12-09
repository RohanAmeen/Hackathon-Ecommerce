export interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    image: string
    category: string
  }
  
  export interface FilterOption {
    id: string
    label: string
    value: string
  }
  
  export interface Filter {
    id: string
    name: string
    options: FilterOption[]
  }
  
  