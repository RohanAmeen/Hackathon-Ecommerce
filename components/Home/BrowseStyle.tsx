import Image from 'next/image'
import Link from 'next/link'

const styles = [
    {
      name: 'Casual',
      image: '/assets/BrowseStyles (1).svg',
      href: '/category/casual',
      featured: true,
    },
    {
      name: 'Formal',
      image: '/assets/BrowseStyles (2).svg',
      href: '/category/formal'
    },
    {
      name: 'Party',
      image: '/assets/BrowseStyles (3).svg',
      href: '/category/party'
    },
    {
      name: 'Gym',
      image: '/assets/BrowseStyles (4).svg',
      href: '/category/gym'
    }
  ]


export default function BrowseStyles() {
  return (
    <section className="mx-auto px-4 py-12 md:px-6 lg:px-8" id='styles'>
      <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
        BROWSE BY DRESS STYLE
      </h2>
      
      {/* Desktop Grid */}
      <div className="hidden md:block">
        <div className="relative rounded-lg bg-gray-100 p-14">
          <div className="grid grid-cols-2 gap-4">
            {styles.map((style, index) => (
              <Link
                key={style.name}
                href={style.href}
                className={`group relative overflow-hidden rounded-lg bg-white ${
                  index === 0 ? ' h-[280px] ' : 
                  index === 1 ? ' h-[280px] right-[50px]' : 
                  index === 2 ? ' h-[280px] ' : 
                  ' h-[280px] ml-24'
                }`}
                style={{
                  width: index === 0 || index === 3 ? '650px' : '800px'
                }}
              >
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">{style.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative rounded-lg bg-gray-100 p-4">
          <div className="flex flex-col gap-4">
            {styles.map((style) => (
              <Link
                key={style.name}
                href={style.href}
                className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-white"
              >
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">{style.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}