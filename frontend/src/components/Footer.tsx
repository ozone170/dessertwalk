export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dessert Walk</h3>
            <p className="text-gray-300">
              Delicious desserts, cakes, and pastries made with love.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@dessertwalk.com</p>
              <p>📍 123 Sweet Street, Dessert City</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <a 
              href="https://www.instagram.com/dessert_walk?igsh=NHRtazRkenR5cXNk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-400 hover:text-pink-300"
            >
              📷 @dessert_walk
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Dessert Walk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}