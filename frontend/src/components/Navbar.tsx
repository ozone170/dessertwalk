'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-pink-600">
            Dessert Walk
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600">
              Home
            </Link>
            <Link href="/items" className="text-gray-700 hover:text-pink-600">
              Items
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-600">
              About
            </Link>
            <Link href="/enquiry" className="text-gray-700 hover:text-pink-600">
              Enquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-pink-600">
                Home
              </Link>
              <Link href="/items" className="block px-3 py-2 text-gray-700 hover:text-pink-600">
                Items
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-pink-600">
                About
              </Link>
              <Link href="/enquiry" className="block px-3 py-2 text-gray-700 hover:text-pink-600">
                Enquiry
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}