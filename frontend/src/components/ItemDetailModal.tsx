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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          
          <div className="absolute bottom-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
            ${item.price}
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
              {item.name}
            </h2>
            <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
              {item.categoryId.name}
            </span>
          </div>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            {item.description}
          </p>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-gray-700">Category:</span>
                <span className="ml-2 text-gray-600">{item.categoryId.name}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-gray-700">Price:</span>
                <span className="ml-2 text-amber-600 font-bold">${item.price}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            
            <a
              href="/enquiry"
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg">
              Make Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}