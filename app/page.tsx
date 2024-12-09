import BrandShowcase from '@/components/Home/BrandShowcase'
import Hero from '@/components/Home/Hero'
import TestimonialsSection from '@/components/Home/TestimonialsSectin'
import ProductGrid from '@/components/Home/ProductGrid'
import { NEW_ARRIVALS, TOP_SELLING } from '@/lib/constant'
import React from 'react'
import BrowseStyles from '@/components/Home/BrowseStyle'
export default function Home() {
  return (
  <>
   <Hero/>
    <BrandShowcase/>
    <ProductGrid  title="NEW ARRIVALS" products={NEW_ARRIVALS} />
      <ProductGrid title="TOP SELLING" products={TOP_SELLING} />
      <BrowseStyles/>
      <TestimonialsSection/>
  </>
  );
}
