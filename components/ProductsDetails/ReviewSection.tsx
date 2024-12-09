"use client"


import { reviews } from "@/data/reviews"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select"
import { Button } from "../ui/Button"
import { ReviewCard } from "./ReviewCard"

export function ReviewSection() {
  return (
    <section className="mx-auto max-w-7xl py-12 font-satoshi">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 gap-4">
        <h2 className="text-2xl font-semibold">
          All Reviews <span className="text-muted-foreground">({reviews.length})</span>
        </h2>
        <div className="flex items-center gap-4">
          <Select defaultValue="latest">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="highest">Highest Rated</SelectItem>
              <SelectItem value="lowest">Lowest Rated</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-black text-white hover:bg-black/90">
            Write a Review
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button variant="outline" className="w-full max-w-xs ">
          Load More Reviews
        </Button>
      </div>
    </section>
  )
}

