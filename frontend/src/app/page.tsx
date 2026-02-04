'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import ItemCard from '@/components/ItemCard';
import ItemDetailModal from '@/components/ItemDetailModal';
import { apiService } from '@/services/api';

interface Category {
  _id: string;
  name: string;
  slug: string;
}

interface Item {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  categoryId: {
    _id: string;
    name: string;
    slug: string;
  };
}

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredItems, setFeaturedItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, itemsData] = await Promise.all([
          apiService.getCategories(),
          apiService.getItems({ featured: true })
        ]);
        setCategories(categoriesData);
        setFeaturedItems(itemsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/items?category=${categoryId}`);
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our delicious range of handcrafted desserts, each category offering unique flavors and experiences
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category: Category) => (
              <div 
                key={category._id} 
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                onClick={() => handleCategoryClick(category._id)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white font-bold">
                    {category.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">Explore {category.name.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Items</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and recommended desserts, carefully selected for their exceptional taste and quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredItems.map((item: Item) => (
              <ItemCard 
                key={item._id} 
                item={item} 
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
          {featuredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Loading featured items...</p>
            </div>
          )}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Dessert Walk</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We are passionate about creating the most delicious and beautiful desserts 
            that bring joy to every occasion. Our handcrafted treats are made with 
            the finest ingredients and lots of love, ensuring every bite is a memorable experience.
          </p>
          <a 
            href="/about"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg transform hover:scale-105"
          >
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real reviews from our happy customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"Amazing desserts! The chocolate cake was absolutely divine. Perfect for our anniversary celebration."</p>
              <p className="font-bold text-gray-800">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"Best pastries in town. Always fresh and delicious! The macarons are to die for."</p>
              <p className="font-bold text-gray-800">- Mike Chen</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"Perfect for special occasions. Highly recommended! Great service and incredible taste."</p>
              <p className="font-bold text-gray-800">- Emily Davis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Item Detail Modal */}
      <ItemDetailModal 
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}