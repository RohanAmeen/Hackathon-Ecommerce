import { Star } from 'lucide-react'

interface ReviewStarsProps {
  rating: number
}

export function ReviewStars({ rating }: ReviewStarsProps) {
  return (
    <div className="flex pb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : star - rating <= 0.5
              ? "fill-yellow-400/50 text-yellow-400"
              : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  )
}

