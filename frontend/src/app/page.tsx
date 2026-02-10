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

        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
        setFeaturedItems(Array.isArray(itemsData) ? itemsData : []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCategories([]);
        setFeaturedItems([]);
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
    <div className="bg-background">
      <Hero />

      {/* Categories Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Crafted for Every <span className="text-primary italic">Occasion</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed">
                Discover our signature collections, where traditional techniques meet modern flavors in a perfect symphony of taste.
              </p>
            </div>
            <button
              onClick={() => router.push('/items')}
              className="group hidden md:flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity animate-fade-up"
            >
              Browse Full Menu
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {categories.map((category: Category, idx: number) => (
              <div
                key={category._id}
                className="group relative bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.1)] transition-all duration-500 cursor-pointer overflow-hidden animate-fade-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
                onClick={() => handleCategoryClick(category._id)}
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <span className="text-xl md:text-2xl text-primary group-hover:text-white font-bold">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-foreground/40 text-[10px] md:text-sm font-medium uppercase tracking-wider">
                    Signatures
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-24 bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Chef's Special <span className="text-primary">Selection</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto font-medium">
              Hand-picked bestsellers that define the Dessert Walk experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {featuredItems.map((item: Item, idx: number) => (
              <div
                key={item._id}
                className="animate-fade-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <ItemCard
                  item={item}
                  onClick={() => handleItemClick(item)}
                />
              </div>
            ))}
          </div>

          {featuredItems.length === 0 && (
            <div className="text-center py-20 animate-pulse">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full mx-auto mb-4 animate-spin" />
              <p className="text-foreground/40 font-bold tracking-widest uppercase text-sm">Crafting Excellence...</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Stories of <br />
                <span className="text-accent italic leading-loose">Sweet Happiness</span>
              </h2>
              <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
                Nothing makes us happier than being part of your special moments. Here is what our lovely customers have to say.
              </p>
              <div className="flex gap-4">


                <div>
                  <p className="font-bold text-foreground">500+ Happy Clients</p>
                  <p className="text-sm text-foreground/40">Across the city</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Shubham Patil", text: "The roasted almond anniversary cake was beyond words delicately nutty, perfectly balanced, and truly unforgettable.", role: "Anniversary Cake" },
                {
                  name: "Mahek Bagwan", text: "The presentation was beautiful and the flavors were spot on. Everything arrived fresh and right on time."
                  , role: "Office Treats"
                },
                {
                  name: "Ananya Kulkarni", text: "Dessert Walk made our wedding truly unforgettable. The cake was beautifully crafted and absolutely stole the spotlight."
                  , role: "Wedding Client"
                },
                { name: "Saeed Nadaf", text: "Exquisitely crafted pastries with a depth of flavor that speaks of true craftsmanship.", role: "Regular Customer" }
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-[#fffaf5] p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className="flex text-pink-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-lg text-foreground">{t.name}</p>
                    <p className="text-sm text-primary font-semibold">{t.role}</p>
                  </div>
                </div>
              ))}
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