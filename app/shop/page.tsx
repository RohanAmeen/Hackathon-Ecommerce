import { FilterSidebar } from "@/components/Shop/FilterSidebar";
import { ProductGrid } from "@/components/Shop/ProductGrid";
import { products } from "@/data/shop";

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Casual</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                Showing {products.length} results
              </span>
            </div>
          </div>
          <ProductGrid products={products}  />
        </div>
      </div>
    </div>
  )
}

