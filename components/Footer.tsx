import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'
import React from 'react'
import { FOOTER_LINKS, PAYMENT_METHODS, SOCIAL_LINKS } from '../lib/Constant/footer'
import NewsletterSection from './Home/NewsLetterSection'

export default function Footer() {
  const socialIcons = {
    Twitter: Twitter,
    Facebook: Facebook,
    Instagram: Instagram,
    GitHub: Github,
  }

  return (
    <>
    <NewsletterSection/>
    <footer className="bg-white pt-16 pb-8 font-satoshi">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 text-center lg:text-left">
            <Link href="/" className="text-3xl font-bold mb-4 block font-integral">
              SHOP.CO
            </Link>
            <p className="text-gray-600 mb-6">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons]
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 bg-white text-black rounded-full border-gray-400 flex items-center justify-center hover:bg-black border hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="col-span-1 text-center sm:text-left">
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center w-full md:text-left md:w-auto">
              Shop.co © 2000-2023. All Rights Reserved
            </p>
            <div className="flex items-center justify-center gap-4 w-full md:w-auto">
              {PAYMENT_METHODS.map((method) => (
                <div key={method.name} className="relative">
                  <Image
                    src={method.image}
                    alt={`${method.name} payment`}
                    width={39}
                    height={45}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}