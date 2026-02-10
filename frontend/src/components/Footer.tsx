'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Dessert Walk
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Delicious desserts, cakes, and pastries made with love and the finest ingredients.
              Every bite tells a story of passion and perfection.
            </p>

            {/* Instagram Icon (EXACT FROM YOUR CODE) */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dessert_walk?igsh=NHRtazRkenR5cXNk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">
              Contact Info
            </h4>

            <div className="space-y-4 text-gray-300">
              <p>📞 90025 61526</p>
              <p>📧 desertwalk170@gmail.com</p>
              <p>📍 Mujawar Arcade, Beside KLE'S Dental College, Belgaum</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">
              Quick Links
            </h4>

            <div className="space-y-3">
              <a href="/" className="block text-gray-300 hover:text-amber-400 transition-colors">Home</a>
              <a href="/items" className="block text-gray-300 hover:text-amber-400 transition-colors">Menu</a>
              <a href="/about" className="block text-gray-300 hover:text-amber-400 transition-colors">About Us</a>
              <a href="/enquiry" className="block text-gray-300 hover:text-amber-400 transition-colors">Order Now</a>
            </div>
          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473.91583815179337!2d74.5164185864923!3d15.880944198659249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf614eae323983%3A0x2ca069a31d9e3f09!2sMUJAWAR%20ARCADE!5e1!3m2!1sen!2sin!4v1770277459584!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-64 md:h-80"
            />
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Dessert Walk. All rights reserved.
          </p>


          <a
            href="https://www.instagram.com/dessert_walk?igsh=NHRtazRkenR5cXNk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 text-sm font-medium mt-4 md:mt-0"

          >

          </a>
        </div>

      </div>
    </footer>
  );
}
