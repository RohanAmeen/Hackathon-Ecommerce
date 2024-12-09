"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"
import { FaqSection } from "./FAQ"
import { ProductDetailsContent } from "./ProductDetailsTab"
import { ReviewSection } from "./ReviewSection"



export function TabsSection() {
  return (
    <Tabs defaultValue="reviews" className="w-full">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="details">Product Details</TabsTrigger>
        <TabsTrigger value="reviews">Rating & Reviews</TabsTrigger>
        <TabsTrigger value="faq">FAQs</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <ProductDetailsContent />
      </TabsContent>
      <TabsContent value="reviews">
        <ReviewSection />
      </TabsContent>
      <TabsContent value="faq">
        <FaqSection />
      </TabsContent>
    </Tabs>
  )
}

