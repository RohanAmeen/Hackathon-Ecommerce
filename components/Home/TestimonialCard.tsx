import { type Testimonial } from "@/lib/Constant/testimonials"
import TestimonialStars from "./TestimonialStars"
import { Card, CardContent } from '../ui/Card'
import Image from 'next/image'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full py-5 sm:py-7 px-6 sm:px-8">
      <CardContent>
        <TestimonialStars rating={testimonial.rating} />
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <span className="font-medium text-sm sm:text-base">{testimonial.name}</span>
          {testimonial.verified && (
            <Image
              src={'/assets/tick.svg'}
              alt="Verified"
              width={16}
              height={16}
              priority
            />
          )}
        </div>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 sm:mt-0">
          "{testimonial.text}"
        </p>
      </CardContent>
    </Card>
  )
}