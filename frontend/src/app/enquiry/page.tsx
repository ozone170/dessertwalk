'use client';

import { useState, useEffect } from 'react';
import { apiService } from '@/services/api';

interface Item {
  _id: string;
  name: string;
  price: number;
}

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    itemId: '',
    referenceImageUrl: '',
  });

  const [items, setItems] = useState<Item[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await apiService.getItems();
        setItems(Array.isArray(itemsData) ? itemsData : []);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await apiService.createEnquiry(formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        itemId: '',
        referenceImageUrl: '',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setShowSuccess(false), 8000);
    } catch (error) {
      alert('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full p-6 rounded-2xl bg-[#fffaf5] border-2 border-pink-500 focus:border-pink-600 focus:ring-2 focus:ring-pink-400/30 outline-none font-medium placeholder:text-foreground/30 transition-all';

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Make an <span className="text-primary italic">Enquiry</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto">
            Planning a special event or custom dessert? Tell us your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">

          {/* FORM */}
          <div className="xl:col-span-8">
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-10">

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-sm font-bold text-black uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      required
                      placeholder="+91 90000 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="yourname@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-sm font-bold text-black uppercase mb-2">
                      Interested Item
                    </label>
                    <select
                      name="itemId"
                      value={formData.itemId}
                      onChange={handleChange}
                      className={inputBase}
                    >
                      <option value="">Select a dessert (optional)</option>
                      {items.map(item => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black uppercase mb-2">
                      Reference Image URL
                    </label>
                    <input
                      name="referenceImageUrl"
                      placeholder="Paste Pinterest / Instagram link"
                      value={formData.referenceImageUrl}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Occasion, cake size, flavour, delivery date, special notes…"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-xl hover:bg-primary-hover transition-all"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                </button>

              </form>
            </div>
          </div>

          {/* SIDE INFO */}
          <div className="xl:col-span-4">
            <div className="bg-[#fffaf5] p-12 rounded-[3rem]">
              <h3 className="text-2xl font-bold text-black mb-6">
                Expert Tips
              </h3>
              <ul className="space-y-4 text-foreground/60 font-medium">
                <li>✨ Allow 48–72 hours for custom cakes</li>
                <li>✨ Bulk orders qualify for special pricing</li>
                <li>✨ Same-day delivery on select items</li>
                <li>✨ Dietary preferences supported</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
