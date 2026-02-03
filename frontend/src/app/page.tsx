'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ItemCard from '@/components/ItemCard';
import { apiService } from '@/services/api';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);

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

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category: any) => (
              <div key={category._id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-pink-600">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredItems.map((item: any) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Dessert Walk</h2>
          <p className="text-lg text-gray-700 mb-8">
            We are passionate about creating the most delicious and beautiful desserts 
            that bring joy to every occasion. Our handcrafted treats are made with 
            the finest ingredients and lots of love.
          </p>
          <a 
            href="/about"
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Learn More About Us
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Amazing desserts! The chocolate cake was absolutely divine."</p>
              <p className="font-semibold">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Best pastries in town. Always fresh and delicious!"</p>
              <p className="font-semibold">- Mike Chen</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Perfect for special occasions. Highly recommended!"</p>
              <p className="font-semibold">- Emily Davis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}