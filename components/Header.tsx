// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="font-integral text-2xl font-bold">
            SHOP.CO
          </Link>

          <nav className="hidden md:flex items-center space-x-8 font-satoshi">
          <Link href="/shop" className="text-gray-900 hover:text-gray-600 font-medium">
              Shop
            </Link>
            <Link href="#Sale" className="text-gray-900 hover:text-gray-600 font-medium">
              On Sale
            </Link>
            <Link href="#New" className="text-gray-900 hover:text-gray-600 font-medium">
              New Arrivals
            </Link>
            <Link href="#styles" className="text-gray-900 hover:text-gray-600 font-medium">
              Brands
            </Link>
          </nav>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-satoshi w-full bg-gray-100 rounded-lg py-2 pl-4 pr-10 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-900 hover:text-gray-600">
             <Image src={'/assets/cart.svg'} alt={'cart-icon'} width={30} height={30}/>
            </Link>
            <Link href="/account" className="text-gray-900 hover:text-gray-600">
            <Image src={'/assets/account.svg'} alt={'account-icon'} width={30} height={30}/>

            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}