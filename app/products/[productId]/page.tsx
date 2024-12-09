import ProductGrid from "@/components/Home/ProductGrid";
import { ProductDetails } from "@/components/ProductsDetails/ProductDetails";
import { ReviewSection } from "@/components/ProductsDetails/ReviewSection";
import { TabsSection } from "@/components/ProductsDetails/TabsSection";
import { TOP_SELLING } from "@/lib/constant";

export default function Page() {
  return (
    <>
      <ProductDetails />
      <ReviewSection/>
      <ProductGrid title="YOU MIGHT ALSO LIKE" products={TOP_SELLING} />


    </>
  );
}
