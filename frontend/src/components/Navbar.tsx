'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isAdminPage = pathname?.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  if (isAdminPage) return null;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'glass-effect py-2 shadow-lg top-2 mx-4 rounded-2xl'
            : 'bg-white/40 backdrop-blur-sm py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-pink-500">
                <Image src="/logo.jpg" alt="Dessert Walk" fill className="object-cover" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent">
                Dessert Walk
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-10">
              {['Home', 'Menu', 'About'].map(item => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : item === 'Menu' ? '/items' : '/about'}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/enquiry"
                className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold"
              >
                Order Now
              </Link>

              {isLoggedIn ? (
                <>
                  <Link href="/admin/dashboard" className="font-semibold">Admin</Link>
                  <button onClick={handleLogout} className="font-semibold text-accent">
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="font-semibold">Login</Link>
              )}
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden p-2 rounded-xl glass-effect"
              onClick={() => setIsOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-[999] md:hidden transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 w-[80%] h-full bg-white shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } p-8`}
        >
          {/* Back Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition mb-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Menu Items */}
          <div className="flex flex-col gap-8 text-black">
            {['Home', 'Menu', 'About'].map(item => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : item === 'Menu' ? '/items' : '/about'}
                className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            <Link
              href="/enquiry"
              className="bg-primary text-white text-center py-4 rounded-2xl font-bold text-xl mt-4"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>

            {/* Admin */}
            <div className="mt-auto pt-8 border-t border-gray-200">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/admin/dashboard"
                    className="block mb-4 font-semibold text-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="font-semibold text-accent"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="font-semibold text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
