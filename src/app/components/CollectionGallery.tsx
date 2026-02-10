import { useParams, Link } from 'react-router';
import { getProductsByCategory } from '../data/products';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

export function CollectionGallery() {
  const { category } = useParams<{ category: 'mens' | 'womens' }>();
  const products = category ? getProductsByCategory(category) : [];

  const title = category === 'mens' ? "Men's Collection" : "Women's Collection";
  const description = category === 'mens' 
    ? 'Precision tailoring meets architectural form. Our men\'s collection embodies structured elegance through clean lines and exceptional craftsmanship.'
    : 'Sculptural silhouettes that celebrate form and movement. Our women\'s collection features structural designs crafted from the finest textiles.';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm tracking-wide text-neutral-700 hover:text-black transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Return to Home
          </Link>
          <h1
            className="text-2xl md:text-3xl text-neutral-900"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            {title}
          </h1>
          <div className="w-32" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Collection Header */}
      <div className="max-w-7xl mx-auto px-8 py-16 text-center">
        <h2
          className="text-5xl lg:text-6xl mb-6 text-neutral-900"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          {title}
        </h2>
        <div className="h-px w-24 bg-neutral-300 mx-auto mb-6" />
        <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-[#fafafa] aspect-[4/5] mb-4">
                <ImageWithFallback
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  Composition Note
                </p>
                <h3
                  className="text-xl text-neutral-900 group-hover:text-neutral-600 transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-600">{product.material}</p>
                <p className="text-sm text-neutral-900">${product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}