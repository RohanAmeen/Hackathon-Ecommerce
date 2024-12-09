import { Star, StarHalf } from 'lucide-react'

interface StarRatingProps {
  rating: number
  reviews: number
}

export default function StarRating({ rating, reviews }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex items-center gap-1.5 ">
      <div className="flex text-yellow-300">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 fill-current" />}
      </div>
      <span className="font-satoshi text-sm text-gray-500">{rating}/5</span>
      <span className="font-satoshi text-sm text-gray-500">({reviews})</span>
    </div>
  )
}

