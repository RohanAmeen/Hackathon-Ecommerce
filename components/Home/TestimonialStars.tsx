import { Star } from 'lucide-react'

interface TestimonialStarsProps {
  rating: number
}

export default function TestimonialStars({ rating }: TestimonialStarsProps) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 mb-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

