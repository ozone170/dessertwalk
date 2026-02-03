export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Dessert Walk</h1>
        
        <div className="space-y-12">
          {/* Brand Story */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dessert Walk began as a dream to bring joy and sweetness to every celebration. 
              Founded with a passion for creating exceptional desserts, we have been serving 
              our community with handcrafted treats that are made with love and the finest ingredients.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create memorable moments through our delicious desserts. We believe that every 
              bite should be a celebration, and every dessert should tell a story of craftsmanship, 
              quality, and care.
            </p>
          </section>

          {/* Why Dessert Walk */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Why Choose Dessert Walk?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-600">Fresh Ingredients</h3>
                <p className="text-gray-700">
                  We source only the finest and freshest ingredients to ensure every dessert 
                  meets our high standards of quality and taste.
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-600">Handcrafted with Love</h3>
                <p className="text-gray-700">
                  Every dessert is carefully handcrafted by our skilled bakers who pour their 
                  passion and expertise into each creation.
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-600">Custom Orders</h3>
                <p className="text-gray-700">
                  We specialize in custom orders for special occasions, ensuring your celebration 
                  is as unique as you are.
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-600">Community Focused</h3>
                <p className="text-gray-700">
                  As a local business, we are committed to serving our community and building 
                  lasting relationships with our customers.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ready to Experience Dessert Walk?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Contact us today to place an order or learn more about our delicious offerings.
            </p>
            <a 
              href="/enquiry"
              className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Make an Enquiry
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}