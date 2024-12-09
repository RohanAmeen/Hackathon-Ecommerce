import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#f2f0f1] z-0 ">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-lg font-satoshi">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="mt-8 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="relative">
            <Image
              src="/assets/HeroImage.png"
              alt="Fashion models wearing casual clothing"
              width={600}
              height={1200}
              priority
            />
            <Image src={'/assets/Vector.svg'} alt="Vector" width={80} height={80} className="absolute top-4 right-4  text-black" />
            <Image src={'/assets/Vector.svg'} alt="Vector" width={20} height={20} className="absolute bottom-1/4 left-4 h-8 w-8 text-black" />
          </div>
        </div>
      </div>
    </div>
  )
}

