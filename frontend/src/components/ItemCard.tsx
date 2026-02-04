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
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          ${item.price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-amber-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs px-3 py-1 rounded-full font-medium">
            {item.categoryId.name}
          </span>
          <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}