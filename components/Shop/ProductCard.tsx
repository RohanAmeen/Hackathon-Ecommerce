import { Product } from '@/lib/constant'
import Image from 'next/image'
import Link from 'next/link'
import StarRating from '../Home/StarRating'
import { PriceDisplay } from './PriceDisplay'


interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600">
          {product.name}
        </h3>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <PriceDisplay price={product.price} originalPrice={product.originalPrice} />
      </div>
    </Link>
  )
}

