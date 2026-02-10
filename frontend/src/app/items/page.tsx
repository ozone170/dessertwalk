'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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

function ItemsContent() {
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsData, categoriesData] = await Promise.all([
          apiService.getItems(),
          apiService.getCategories()
        ]);

        const safeItemsData = Array.isArray(itemsData) ? itemsData : [];
        const safeCategoriesData = Array.isArray(categoriesData) ? categoriesData : [];

        setItems(safeItemsData);
        setCategories(safeCategoriesData);
        setFilteredItems(safeItemsData);

        const categoryParam = searchParams.get('category');
        if (categoryParam) {
          setSelectedCategory(categoryParam);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setItems([]);
        setCategories([]);
        setFilteredItems([]);
      }
    };

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    let filtered = items;

    if (selectedCategory) {
      filtered = filtered.filter((item: Item) => item.categoryId._id === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter((item: Item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [items, selectedCategory, searchTerm]);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const getSelectedCategoryName = (): string => {
    if (!selectedCategory) return 'All Delights';
    const category = categories.find((cat: Category) => cat._id === selectedCategory);
    return category ? category.name : 'All Delights';
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Our <span className="text-primary italic">Menu</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Explore our artisanal collection of handcrafted treats, where every piece is a work of culinary art.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-20 space-y-12">
          <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for your favorite dessert..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-6 pl-16 rounded-[2rem] border border-foreground/5 glass-effect focus:ring-4 focus:ring-primary/20 focus:border-primary/30 shadow-2xl transition-all font-medium text-lg placeholder:text-foreground/30"
              />
              <svg className="absolute left-6 top-1/2 transform -translate-y-1/2 w-7 h-7 text-foreground/20 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-8 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-widest active:scale-95 ${selectedCategory === ''
                  ? 'bg-primary text-white shadow-[0_10px_30px_rgba(245,158,11,0.3)]'
                  : 'glass-effect text-foreground/60 hover:text-primary'
                }`}
            >
              Originals
            </button>
            {categories.map((category: Category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category._id)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-widest active:scale-95 ${selectedCategory === category._id
                    ? 'bg-primary text-white shadow-[0_10px_30px_rgba(245,158,11,0.3)]'
                    : 'glass-effect text-foreground/60 hover:text-primary'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              {getSelectedCategoryName()}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest">
                {filteredItems.length} Selections Available
              </p>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredItems.map((item: Item, idx: number) => (
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

        {filteredItems.length === 0 && (
          <div className="text-center py-32 animate-fade-up">
            <div className="w-24 h-24 bg-foreground/5 rounded-[2.5rem] mx-auto mb-8 flex items-center justify-center">
              <svg className="w-12 h-12 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">No treats found</h3>
            <p className="text-foreground/40 max-w-md mx-auto mb-10 font-medium">
              We couldn't find any desserts matching your search. Why not explore our full collection instead?
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary-hover shadow-xl transition-all active:scale-95"
            >
              View Full Menu
            </button>
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default function ItemsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6" />
          <p className="text-foreground/40 font-bold tracking-[0.2em] uppercase text-sm">Preparing Menu</p>
        </div>
      </div>
    }>
      <ItemsContent />
    </Suspense>
  );
}