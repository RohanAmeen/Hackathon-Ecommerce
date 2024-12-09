'use client'

import * as React from 'react'
import { Slider } from '../ui/Slider'
interface FilterSidebarProps {
  onFilterChange?: (filters: FilterState) => void
}

interface FilterState {
  category: string[]
  priceRange: [number, number]
  colors: string[]
  sizes: string[]
}

const initialFilters: FilterState = {
  category: [],
  priceRange: [0, 500],
  colors: [],
  sizes: []
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = React.useState<FilterState>(initialFilters)

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category]
    
    updateFilters({ category: newCategories })
  }

  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color]
    
    updateFilters({ colors: newColors })
  }

  const handleSizeChange = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size]
    
    updateFilters({ sizes: newSizes })
  }

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange?.(updatedFilters)
  }

  return (
    <div className="w-64 space-y-8 border-r p-4">
      <div>
        <h2 className="mb-4 text-lg font-semibold">Filters</h2>
        
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Category</h3>
            <div className="space-y-2">
              {['Casual', 'Formal', 'Sports', 'Accessories'].map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Price</h3>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 500]}
                max={500}
                step={10}
                className="[&_[role=slider]]:bg-black [&_[role=slider]]:hover:bg-black"
                onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
              />
              <div className="flex items-center justify-between text-sm">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Colors</h3>
            <div className="grid grid-cols-5 gap-2">
              {[
                { name: 'Red', class: 'bg-red-500' },
                { name: 'Blue', class: 'bg-blue-500' },
                { name: 'Green', class: 'bg-green-500' },
                { name: 'Yellow', class: 'bg-yellow-500' },
                { name: 'Purple', class: 'bg-purple-500' },
                { name: 'Pink', class: 'bg-pink-500' },
                { name: 'Orange', class: 'bg-orange-500' },
                { name: 'Gray', class: 'bg-gray-500' },
                { name: 'Black', class: 'bg-black' },
                { name: 'White', class: 'bg-white border border-gray-200' },
              ].map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(color.name)}
                  className={`h-6 w-6 rounded-full ${color.class} ${
                    filters.colors.includes(color.name)
                      ? 'ring-2 ring-offset-2 ring-black'
                      : ''
                  }`}
                  title={color.name}
                >
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`rounded border px-3 py-1 text-sm ${
                    filters.sizes.includes(size)
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 hover:border-gray-900'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => setFilters(initialFilters)}
        className="w-full rounded-md border border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white"
      >
        Clear Filters
      </button>
    </div>
  )
}