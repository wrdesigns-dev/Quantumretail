import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MobileMenu } from './MobileMenu';
import { Footer } from './Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Floating Navigation - Desktop */}
      <nav className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-lg shadow-black/5">
        <ul className="flex items-center gap-12">
          <li>
            <Link to="/collection/mens" className="text-sm tracking-wide text-neutral-700 hover:text-black transition-colors relative group">
              Men's Collection
              <span className="absolute bottom-0 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link to="/collection/womens" className="text-sm tracking-wide text-neutral-700 hover:text-black transition-colors relative group">
              Women's Collection
              <span className="absolute bottom-0 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link to="/seasonal-curations" className="text-sm tracking-wide text-neutral-700 hover:text-black transition-colors relative group">
              Seasonal Curations
              <span className="absolute bottom-0 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
          <li>
            <Link to="/our-story" className="text-sm tracking-wide text-neutral-700 hover:text-black transition-colors relative group">
              Our Story
              <span className="absolute bottom-0 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section - Split Frame */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Left Side - Men's */}
          <div className="relative w-1/2 overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1598818384768-da214369b977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBibGFjayUyMHN1aXQlMjBtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDE1MjM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Man in precision-tailored topcoat"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
          </div>

          {/* Right Side - Women's */}
          <div className="relative w-1/2 overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1668656690099-49987f3425f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0cnVjdHVyYWwlMjBldmVuaW5nJTIwZ293biUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcwMTUyMzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Woman in structural evening gown"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
          </div>
        </div>

        {/* Center Brand Name */}
        <div className="relative z-10 text-center px-8">
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl text-white mb-4 tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            QUANTUM
          </h1>
          <div className="h-px w-32 mx-auto bg-white/40 mb-4" />
          <p 
            className="text-white/90 text-sm tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Retail
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* Men's Edit Section */}
      <section id="mens" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 
                className="text-5xl lg:text-6xl mb-6 text-neutral-900"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Men's Collection
              </h2>
              <div className="h-px w-24 bg-neutral-300 mb-8" />
              <p className="text-neutral-600 leading-relaxed mb-8 max-w-md">
                Precision tailoring meets architectural form. Our men's collection embodies structured elegance through 
                clean lines and exceptional craftsmanship. Each piece is designed for the modern man who values subtlety and refinement.
              </p>
              <Link 
                to="/collection/mens"
                className="inline-flex items-center gap-3 text-sm tracking-wide uppercase border-b border-neutral-900 pb-1 hover:gap-4 transition-all"
              >
                Explore Collection
                <span className="text-xs">→</span>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512675828443-4f454c42253a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFzaGlvbiUyMG1pbmltYWwlMjBzdHVkaW98ZW58MXx8fHwxNzcwMTUyMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Men's fashion collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Edit Section */}
      <section id="womens" className="py-32 px-8 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764740113465-dc9e6b28cc9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBmYXNoaW9uJTIwbWluaW1hbCUyMHN0dWRpb3xlbnwxfHx8fDE3NzAxNTIzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Women's fashion collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 
                className="text-5xl lg:text-6xl mb-6 text-neutral-900"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Women's Collection
              </h2>
              <div className="h-px w-24 bg-neutral-300 mb-8" />
              <p className="text-neutral-600 leading-relaxed mb-8 max-w-md">
                Sculptural silhouettes that celebrate form and movement. Our women's collection features structural designs 
                crafted from the finest textiles, where every seam and drape speaks to intentional design and timeless elegance.
              </p>
              <Link 
                to="/collection/womens"
                className="inline-flex items-center gap-3 text-sm tracking-wide uppercase border-b border-neutral-900 pb-1 hover:gap-4 transition-all"
              >
                Explore Collection
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery - Updated to link to detail pages */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-5xl lg:text-6xl mb-6 text-neutral-900"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Latest Collection
            </h2>
            <div className="h-px w-24 bg-neutral-300 mx-auto mb-6" />
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Curated pieces that embody our commitment to architectural clarity and exceptional craftsmanship.
            </p>
          </div>

          {/* Asymmetrical Grid */}
          <div className="grid grid-cols-12 gap-8 auto-rows-fr">
            {/* Row 1 */}
            <Link to="/product/structured-tote" className="col-span-12 md:col-span-5 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-[4/5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1637759292654-a12cb2be085e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnJTIwc3RpbGwlMjBsaWZlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAxNTI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Leather tote bag"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              {/* Composition Note */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Structured Tote
                </h3>
                <p className="text-sm text-neutral-600">Full-Grain Calfskin</p>
                <p className="text-sm text-neutral-900 mt-2">$1,250</p>
              </div>
            </Link>

            <Link to="/product/architectural-coat" className="col-span-12 md:col-span-7 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-[16/10]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1616057653867-d3edfb20a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2F0JTIwZmxvd2luZyUyMGZhYnJpYyUyMG1vdGlvbnxlbnwxfHx8fDE3NzAxNTI3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tailored coat"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Architectural Coat
                </h3>
                <p className="text-sm text-neutral-600">Double-Faced Cashmere</p>
                <p className="text-sm text-neutral-900 mt-2">$3,800</p>
              </div>
            </Link>

            {/* Row 2 */}
            <Link to="/product/classic-sneakers" className="col-span-12 md:col-span-4 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1625860191460-10a66c7384fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc25lYWtlcnMlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMTUzMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Minimalist sneakers"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Classic Sneakers
                </h3>
                <p className="text-sm text-neutral-600">Premium Italian Leather</p>
                <p className="text-sm text-neutral-900 mt-2">$620</p>
              </div>
            </Link>

            <Link to="/product/essential-knitwear" className="col-span-12 md:col-span-4 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXIlMjBtb3Rpb258ZW58MXx8fHwxNzcwMTUyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cashmere sweater"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Essential Knitwear
                </h3>
                <p className="text-sm text-neutral-600">Pure Mongolian Cashmere</p>
                <p className="text-sm text-neutral-900 mt-2">$1,450</p>
              </div>
            </Link>

            <Link to="/product/precision-timepiece" className="col-span-12 md:col-span-4 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1594120665604-953402382256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHN0aWxsJTIwbGlmZXxlbnwxfHx8fDE3NzAxNTI3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Minimalist watch"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Precision Timepiece
                </h3>
                <p className="text-sm text-neutral-600">Stainless Steel & Sapphire Crystal</p>
                <p className="text-sm text-neutral-900 mt-2">$2,100</p>
              </div>
            </Link>

            {/* Row 3 */}
            <Link to="/product/sculptural-gown" className="col-span-12 md:col-span-7 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-[16/10]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767049602603-4667390c6844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMGZsb3dpbmclMjBtb3ZlbWVudHxlbnwxfHx8fDE3NzAxNTI3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Flowing evening dress"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Sculptural Gown
                </h3>
                <p className="text-sm text-neutral-600">Silk Crepe de Chine</p>
                <p className="text-sm text-neutral-900 mt-2">$4,200</p>
              </div>
            </Link>

            <Link to="/product/artisan-gloves" className="col-span-12 md:col-span-5 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-[4/5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1596894573125-e2c7ecdebe13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZ2xvdmVzJTIwbWluaW1hbCUyMHN0aWxsfGVufDF8fHx8MTc3MDE1MzMxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Leather gloves"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Artisan Gloves
                </h3>
                <p className="text-sm text-neutral-600">Nappa Leather</p>
                <p className="text-sm text-neutral-900 mt-2">$380</p>
              </div>
            </Link>

            {/* Row 4 */}
            <Link to="/product/artisan-necktie" className="col-span-12 md:col-span-6 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770062422093-ae32c8fed2a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWUlMjBuZWNrdGllJTIwbWluaW1hbCUyMGx1eHVyeXxlbnwxfHx8fDE3NzAxNTQwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Silk necktie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Artisan Necktie
                </h3>
                <p className="text-sm text-neutral-600">Hand-Rolled Silk Twill</p>
                <p className="text-sm text-neutral-900 mt-2">$280</p>
              </div>
            </Link>

            <Link to="/product/structured-blazer" className="col-span-12 md:col-span-6 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1715408153725-186c6c77fb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGF6ZXIlMjBqYWNrZXQlMjBtaW5pbWFsJTIwbHV4dXJ5fGVufDF8fHx8MTc3MDE1NDA2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tailored blazer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Structured Blazer
                </h3>
                <p className="text-sm text-neutral-600">Italian Merino Wool</p>
                <p className="text-sm text-neutral-900 mt-2">$1,990</p>
              </div>
            </Link>

            {/* Row 5 */}
            <Link to="/product/classic-sunglasses" className="col-span-12 md:col-span-4 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1697659625477-1b04b5c6879e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwbWluaW1hbCUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NzAxNTMzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Classic sunglasses"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Classic Sunglasses
                </h3>
                <p className="text-sm text-neutral-600">Acetate & UV-Protected Lenses</p>
                <p className="text-sm text-neutral-900 mt-2">$520</p>
              </div>
            </Link>

            <Link to="/product/bifold-wallet" className="col-span-12 md:col-span-8 relative group overflow-hidden bg-[#fafafa] cursor-pointer">
              <div className="aspect-[16/9]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620109176813-e91290f6c795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd2FsbGV0JTIwbWluaW1hbCUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NzAxNTI3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Leather wallet"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm p-6 shadow-lg">
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Composition Note</p>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Bifold Wallet
                </h3>
                <p className="text-sm text-neutral-600">Saffiano Leather</p>
                <p className="text-sm text-neutral-900 mt-2">$340</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Feature */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl lg:text-5xl mb-6 text-neutral-900"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Architectural Clarity
            </h2>
            <div className="h-px w-24 bg-neutral-300 mx-auto mb-6" />
            <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Every garment is an expression of precision and purpose. We believe in the intersection of 
              architectural form and sartorial excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-square overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1754577060019-f997f5566168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGV0YWlsJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAxNTIzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury textile detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Exceptional Materials
                </h3>
                <p className="text-white/80 text-sm">Premium textiles sourced globally</p>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654359058432-591721c59190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZmFzaGlvbiUyMHNpbGhvdWV0dGV8ZW58MXx8fHwxNzcwMTUyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Architectural silhouette"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Structural Design
                </h3>
                <p className="text-white/80 text-sm">Form that celebrates silhouette</p>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden group bg-neutral-100 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-neutral-900 text-2xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Timeless Elegance
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Designs that transcend seasons, crafted to become wardrobe essentials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Curations */}
      <section id="seasonal" className="py-32 px-8 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 
            className="text-5xl lg:text-6xl mb-6 text-neutral-900"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Seasonal Curations
          </h2>
          <div className="h-px w-24 bg-neutral-300 mx-auto mb-8" />
          <p className="text-neutral-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Curated selections that reflect the essence of each season. Discover pieces that blend contemporary 
            sensibility with enduring style.
          </p>
          <Link 
            to="/seasonal-curations"
            className="inline-flex items-center gap-3 text-sm tracking-wide uppercase border border-neutral-900 px-8 py-4 hover:bg-neutral-900 hover:text-white transition-all"
          >
            View Current Collection
            <span className="text-xs">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}