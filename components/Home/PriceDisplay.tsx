interface PriceDisplayProps {
    price: number
    originalPrice?: number
  }
  
  export default function PriceDisplay({ price, originalPrice }: PriceDisplayProps) {
    return (
      <div className="flex items-center gap-2 font-satoshi px-32 sm:px-0">
        <span className="font-semibold text-2xl">${price}</span>
        {originalPrice && (
          <span className=" text-gray-500 line-through text-2xl">
            ${originalPrice}
          </span>
        )}
      </div>
    )
  }
  
  