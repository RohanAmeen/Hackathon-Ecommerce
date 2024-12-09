"use client"

import { TESTIMONIALS } from "@/lib/Constant/testimonials"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import TestimonialCard from "../Home/TestimonialCard"
import Image from 'next/image'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1
      const maxIndex = TESTIMONIALS.length - slidesToShow
      return nextIndex > maxIndex ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1
      const maxIndex = TESTIMONIALS.length - slidesToShow
      return prevIndex < 0 ? maxIndex : prevIndex
    })
  }

  const calculateSlideWidth = () => {
    return `${100 / slidesToShow}%`
  }

  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-0 text-center sm:text-left">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="rounded-full hover:bg-gray-100"
            >
              <Image
                src={'/assets/arrow-left.svg'}
                alt="Previous slide"
                width={16}
                height={16}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-gray-100"
            >
              <Image
                src={'/assets/arrow-right.svg'}
                alt="Next slide"
                width={20}
                height={20}
              />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-4 md:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0"
                style={{
                  width: calculateSlideWidth(),
                  opacity: Math.abs(index - currentIndex) >= slidesToShow ? 0.3 : 1,
                  filter: Math.abs(index - currentIndex) >= slidesToShow ? 'blur(4px)' : 'none',
                  transition: 'opacity 300ms, filter 300ms',
                  padding: '0 8px',
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 lg:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 lg:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}