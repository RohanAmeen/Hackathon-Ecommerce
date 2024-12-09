import Image from 'next/image'
import Link from 'next/link'
import { type Product } from '@/lib/constant'
import PriceDisplay from './PriceDisplay'
import StarRating from './StarRating'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="relative aspect-square w-full max-w-72 overflow-hidden rounded-lg mx-auto">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2 text-center sm:text-left">
        <h3 className="font-bold font-satoshi text-gray-900 group-hover:text-gray-600 text-xl">
          {product.name}
        </h3>
        <div className="flex justify-center sm:justify-start">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <PriceDisplay price={product.price} originalPrice={product.originalPrice} />
      </div>
    </Link>
  )
}