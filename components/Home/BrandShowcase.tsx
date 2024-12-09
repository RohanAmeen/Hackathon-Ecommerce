import Image from 'next/image'

export default function BrandShowcase() {
  const brands = [
    { name: 'Versace', logo: '/assets/Group.svg' },
    { name: 'Zara', logo: '/assets/zara-logo.svg' },
    { name: 'Gucci', logo: '/assets/gucci-logo.svg' },
    { name: 'Prada', logo: '/assets/prada-logo.svg' },
    { name: 'Calvin Klein', logo: '/assets/CKLogo.svg' },
  ]

  return (
    <section className="w-full bg-black py-8 relative z-40 -m-24 ml-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-20 md:gap-28">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="relative w-24 md:w-32 h-12 transition-transform hover:scale-105"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

