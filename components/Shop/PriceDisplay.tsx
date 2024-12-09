interface PriceDisplayProps {
    price: number
    originalPrice?: number
  }
  
  export function PriceDisplay({ price, originalPrice }: PriceDisplayProps) {
    const discount = originalPrice
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0
  
    return (
      <div className="flex items-center gap-2">
        <span className="font-semibold">${price}</span>
        {originalPrice && (
          <>
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
            <span className="text-sm text-red-600">-{discount}%</span>
          </>
        )}
      </div>
    )
  }
  
  