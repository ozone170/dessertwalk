import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-[70vh] bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            Dessert Walk
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light opacity-90">
          Indulge in our delicious handcrafted desserts
        </p>
        <p className="text-lg md:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
          From decadent cakes to artisanal pastries, every bite tells a story of passion and perfection
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/items"
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105"
          >
            Explore Menu
          </Link>
          <Link 
            href="/enquiry"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-orange-600 transition-all"
          >
            Make an Enquiry
          </Link>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-red-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}