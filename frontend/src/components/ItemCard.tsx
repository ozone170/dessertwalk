'use client';

interface ItemCardProps {
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
  };
  onClick?: () => void;
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  return (
    <div
      className="group bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] transition-all duration-500 cursor-pointer flex flex-col h-full border border-foreground/5"
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-6 right-6">
          <div className="glass-effect px-5 py-2.5 rounded-2xl text-foreground font-bold text-xl shadow-lg border border-white/40">
            ₹{item.price}
          </div>
        </div>

        <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="bg-primary text-white text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full font-bold shadow-xl">
            {item.categoryId.name}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-foreground/50 text-base mb-8 line-clamp-2 leading-relaxed font-medium">
          {item.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-widest">
            <span className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
              View Detail
            </span>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}