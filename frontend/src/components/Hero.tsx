import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home_page.png')",
        }}
      />

      {/* ================= GRADIENT + EFFECT OVERLAY ================= */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-transparent to-rose-200/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent opacity-50" />

        {/* Abstract Shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-200/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-100/40 blur-[100px] rounded-full" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass-effect text-primary text-sm font-bold tracking-wider uppercase animate-fade-up">
          Artisanal & Handcrafted
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-foreground animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Indulge in <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-400 bg-clip-text text-transparent">
            Pure Sweetness
          </span>
        </h1>

        <p
          className="text-lg md:text-2xl mb-12 text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          From decadent tiered cakes to artisanal morning pastries, discover the magic in every handcrafted bite.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            href="/items"
            className="group relative bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl overflow-hidden active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Menu
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Link>

          <Link
            href="/enquiry"
            className="glass-effect text-foreground px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white hover:text-primary transition-all active:scale-95 shadow-sm"
          >
            Custom Order
          </Link>
        </div>
      </div>

      {/* ================= FLOATING DECOR ================= */}
      <div className="hidden lg:block absolute bottom-20 left-20 animate-bounce" style={{ animationDuration: '4s' }}>
        <div className="w-4 h-4 rounded-full bg-pink-400/30 blur-sm" />
      </div>
      <div className="hidden lg:block absolute top-[30%] right-[15%] animate-pulse">
        <div className="w-3 h-3 rounded-full bg-rose-400/40 blur-sm" />
      </div>
    </div>
  );
}
