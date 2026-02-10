'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdecef] pt-24 text-pink-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-32 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://png.pngtree.com/background/20220726/original/pngtree-bakery-products-background-cake-cookie-picture-image_1825821.jpg')",
          }}
        />

        {/* Pink Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/90 via-pink-200/85 to-rose-300/90" />

        {/* Glow */}
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] bg-pink-400/40 blur-[140px] rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md text-pink-700 text-sm font-semibold tracking-wider uppercase">
            Our Heritage
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-pink-900">
            A Legacy of <br />
            <span className="italic text-pink-600">Sweetness</span>
          </h1>

          <p className="text-xl md:text-2xl text-pink-900/70 max-w-2xl mx-auto leading-relaxed">
            Where every dessert tells a story of craftsmanship, passion, and perfection.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* ================= STORY ================= */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="italic text-pink-500">Story</span>
              </h2>

              <div className="space-y-6 text-lg text-pink-900/60 leading-relaxed">
                <p>
                  Dessert Walk began as a dream to bring joy and sweetness to every celebration.
                  Every dessert is handcrafted using the finest ingredients.
                </p>
                <p>
                  From classic recipes to modern creations, we focus on quality, creativity,
                  and unforgettable taste.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '5+', label: 'Years of Excellence' },
                  { value: '1K+', label: 'Happy Clients' },
                  { value: '50+', label: 'Original Recipes' },
                  { value: '★★★★★', label: 'Top Rated Bakery' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-10 rounded-[2.5rem] text-center transition-all shadow-lg hover:shadow-2xl ${i === 3 ? 'bg-pink-500 text-white' : 'bg-white'
                      }`}
                  >
                    <div className={`text-5xl font-bold mb-2 ${i === 3 ? '' : 'text-pink-500'}`}>
                      {item.value}
                    </div>
                    <p
                      className={`text-sm font-bold uppercase tracking-widest ${i === 3 ? 'opacity-90' : 'text-pink-900/40'
                        }`}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-pink-300/30 blur-[120px] -z-10 rounded-full" />
            </div>
          </div>
        </section>

        {/* ================= PHILOSOPHY ================= */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="italic text-pink-500">Philosophy</span>
            </h2>
            <div className="w-24 h-1.5 bg-pink-400 mx-auto rounded-full mb-8" />
            <p className="text-xl text-pink-900/50 max-w-2xl mx-auto">
              Excellence, creativity, and love baked into every bite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Pure Ingredients', icon: '🌱' },
              { title: 'Artisan Crafted', icon: '👩‍🍳' },
              { title: 'Custom Creations', icon: '🎂' },
              { title: 'Made with Love', icon: '💗' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] shadow-lg hover:shadow-pink-300/60 transition-all"
              >
                <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center text-3xl mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-700">
                  {item.title}
                </h3>
                <p className="text-pink-900/50">
                  Carefully prepared to deliver unforgettable taste and joy.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section>
          <div className="bg-pink-200 rounded-[3.5rem] p-16 text-center shadow-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-pink-700">
              Ready for a <span className="italic text-pink-500">Sweet</span> Experience?
            </h2>
            <p className="text-xl text-pink-800/60 max-w-2xl mx-auto mb-12">
              Browse our menu or contact us for custom dessert creations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/items"
                className="bg-pink-500 text-white px-12 py-5 rounded-2xl font-bold hover:bg-pink-600 transition"
              >
                View Our Menu
              </a>
              <a
                href="/enquiry"
                className="border-2 border-pink-500 text-pink-600 px-12 py-5 rounded-2xl font-bold hover:bg-pink-500 hover:text-white transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
