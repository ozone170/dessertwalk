import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-96 bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Dessert Walk
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Indulge in our delicious handcrafted desserts
        </p>
        <Link 
          href="/enquiry"
          className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Make an Enquiry
        </Link>
      </div>
    </div>
  );
}