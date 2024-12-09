import { Mail } from 'lucide-react'

export default function NewsletterSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className=" mx-auto bg-black rounded-[30px] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-full text-sm focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

