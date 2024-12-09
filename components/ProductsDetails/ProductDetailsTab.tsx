export function ProductDetailsContent() {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="mt-2 text-muted-foreground">
            The ONE LIFE GRAPHIC T-SHIRT is crafted from premium cotton blend fabric, 
            offering superior comfort and durability. The unique graphic design represents 
            our signature style while maintaining a versatile look suitable for any occasion.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Material & Care</h3>
          <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
            <li>100% Premium Cotton</li>
            <li>Machine wash cold</li>
            <li>Tumble dry low</li>
            <li>Do not bleach</li>
            <li>Iron on low if needed</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Size & Fit</h3>
          <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
            <li>Regular fit</li>
            <li>True to size</li>
            <li>Model wears size M</li>
            <li>Model height: 6'1"/185 cm</li>
          </ul>
        </div>
      </div>
    )
  }
  
  