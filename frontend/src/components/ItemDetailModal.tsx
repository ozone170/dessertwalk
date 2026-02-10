'use client';

interface ItemDetailModalProps {
  item: {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    categoryId: {
      name: string;
      slug: string;
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ItemDetailModal({ item, isOpen, onClose }: ItemDetailModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/40 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] flex flex-col md:flex-row animate-fade-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 glass-effect hover:bg-white p-3 rounded-2xl shadow-xl transition-all active:scale-95 text-foreground"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8">
            <div className="glass-effect px-6 py-3 rounded-2xl text-foreground font-bold text-2xl shadow-2xl border border-white/40">
              ₹{item.price}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 p-10 md:p-14 overflow-y-auto flex flex-col">
          <div className="mb-8">
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
              {item.categoryId.name}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              {item.name}
            </h2>
          </div>

          <div className="space-y-8 flex-grow">
            <p className="text-foreground/60 text-lg leading-relaxed font-medium">
              {item.description}
            </p>

            <div className="grid grid-cols-1 gap-4 pt-8 border-t border-foreground/5">
              <div className="flex items-center justify-between py-2">
                <span className="text-foreground/40 font-bold uppercase text-[10px] tracking-widest">Availability</span>
                <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">Freshly Made</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-foreground/5">
                <span className="text-foreground/40 font-bold uppercase text-[10px] tracking-widest">Preparation Time</span>
                <span className="text-foreground font-bold text-sm">2-4 Hours</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="/enquiry"
              className="flex-1 bg-primary hover:bg-primary-hover text-white py-5 px-10 rounded-2xl font-bold text-center transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3"
            >
              Order Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}