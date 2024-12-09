'use client'

import * as React from "react"
import Image from "next/image"
import { MinusIcon, PlusIcon, Star } from 'lucide-react'

import { Label } from "@/components/ui/label"
import { product } from "@/data/product"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { Button } from "../ui/Button"
import Link from "next/link"

export function ProductDetails() {
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0].name)
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[2])
  const [quantity, setQuantity] = React.useState(1)

  return (
    <div className="pt-24 mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-20 w-20 overflow-hidden rounded-lg border bg-gray-100"
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="object-cover"
                    fill
                  />
                </div>
              ))}
            </div>
            <div className="relative flex-1 aspect-square overflow-hidden rounded-lg border bg-gray-100">
              <Image
                src={product.images[0]}
                alt={product.name}
                className="object-cover"
                fill
                priority
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-700">
              -
              {Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) *
                  100
              )}
              %
            </span>
          </div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="space-y-4">
            <div>
              <Label>Color</Label>
              <RadioGroup
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="mt-2 flex gap-2"
              >
                {product.colors.map((color) => (
                  <div key={color.name} className="flex items-center space-x-2">
                    <RadioGroupItem value={color.name} id={color.name} className="sr-only" />
                    <Label
                      htmlFor={color.name}
                      className="cursor-pointer rounded-full p-0.5 ring-2 ring-transparent transition-all hover:ring-gray-400 data-[state=checked]:ring-primary"
                      data-state={selectedColor === color.name ? "checked" : ""}
                    >
                      <div
                        className="h-8 w-8 rounded-full border"
                        style={{ backgroundColor: color.value }}
                      />
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label>Size</Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="mt-2 flex flex-wrap gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={size} className="sr-only" />
                    <Label
                      htmlFor={size}
                      className="cursor-pointer rounded-md border px-4 py-2 text-sm ring-1 ring-transparent transition-all hover:bg-gray-100 data-[state=checked]:bg-black data-[state=checked]:text-white"
                      data-state={selectedSize === size ? "checked" : ""}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
           {/* Replace the last two divs in your code with this */}
<div className="flex items-center gap-4">
  <div>
    <Label>Quantity</Label>
    <div className="mt-2 flex items-center border rounded-[62px] bg-gray-100">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="h-10 w-10 rounded-[62px]"
      >
        <MinusIcon className="h-4 w-4" />
      </Button>
      <span className="w-12 text-center">{quantity}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setQuantity(quantity + 1)}
        className="h-10 w-10 rounded-[62px]"
      >
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  </div>
  <div className="flex-1">
    <Link href="/cart" className="rounded-[62px]">
    <Button className="w-full h-[44px] mt-8 rounded-[62px] bg-black text-white hover:bg-black/90" size="lg">
      Add to Cart
    </Button>
    </Link>
  </div>
</div>
         
          </div>
         
        </div>
      </div>
    </div>
  )
}

