import { type Product } from '@/lib/constant'
import Link from 'next/link'
import ProductCard from './ProductCard'

interface ProductGridProps {
  title: string
  products: Product[]
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="py-12 mt-24 "id={title === 'NEW ARRIVALS' ? 'New' : 'Sale'}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold tracking-tight  w-full text-gray-900 text-center">
            {title}
          </h2>
          
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </section>
  )
}

