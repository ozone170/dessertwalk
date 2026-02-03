interface ItemCardProps {
  item: {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    categoryId: {
      name: string;
      slug: string;
    };
  };
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={item.imageUrl} 
        alt={item.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">
          {item.categoryId.name}
        </span>
      </div>
    </div>
  );
}