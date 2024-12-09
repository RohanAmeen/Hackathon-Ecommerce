import { MoreHorizontal, CheckCircle2 } from 'lucide-react'

import type { Review } from "@/data/reviews"
import { Button } from '../ui/Button'
import { Card, CardHeader, CardContent } from '../ui/Card'
import { ReviewStars } from './ReviewStars'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="h-full font-satoshi">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pt-6 px-6">
        <div className="space-y-1 ">
          <ReviewStars rating={review.rating} />
          <div className="flex items-center gap-2">
            <span className="font-semibold">{review.author}</span>
            {review.verified && (
              <CheckCircle2 className="h-4 w-4 fill-green-500 text-white" />
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-4">{review.content}</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Posted on {review.date}
        </p>
      </CardContent>
    </Card>
  )
}

