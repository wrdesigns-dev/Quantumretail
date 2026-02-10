import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getProductById } from '../data/products';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Checkout } from './Checkout';
import { Footer } from './Footer';

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Product Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all text-sm tracking-wide uppercase"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Checkout Modal */}
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />

      {/* Header with Back Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm tracking-wide text-neutral-700 hover:text-black transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Return to Collection
          </button>
          <h1
            className="text-2xl md:text-3xl text-neutral-900"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            {product.name}
          </h1>
          <div className="w-32" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Product Detail Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-[#fafafa] overflow-hidden">
              <ImageWithFallback
                src={product.images[selectedImageIndex]}
                alt={`${product.name} - View ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-24 bg-[#fafafa] overflow-hidden transition-all ${
                    selectedImageIndex === index
                      ? 'ring-2 ring-neutral-900 opacity-100'
                      : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* View Labels */}
            <div className="flex gap-4 text-xs uppercase tracking-wider text-neutral-500">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`transition-colors ${
                    selectedImageIndex === index ? 'text-neutral-900' : 'hover:text-neutral-700'
                  }`}
                >
                  {index === 0 ? 'Main View' : index === 1 ? 'Detail' : index === 2 ? 'Back View' : 'Lifestyle'}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                {product.category === 'mens' ? "Men's Collection" : "Women's Collection"}
              </p>
              <h2
                className="text-4xl md:text-5xl mb-4 text-neutral-900"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                {product.name}
              </h2>
              <div className="h-px w-24 bg-neutral-300 mb-6" />
              <p className="text-neutral-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Material & Price */}
            <div className="border-t border-b border-neutral-200 py-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase tracking-wider text-neutral-500">Material</span>
                <span className="text-sm text-neutral-900">{product.material}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase tracking-wider text-neutral-500">Price</span>
                <span
                  className="text-2xl text-neutral-900"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  ${product.price.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Technical Narrative - Monospaced Font */}
            <div className="bg-[#fafafa] p-8">
              <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                Technical Narrative
              </h3>
              <p
                className="text-sm leading-relaxed text-neutral-800"
                style={{ fontFamily: "'Courier New', 'Courier', monospace" }}
              >
                {product.technicalNarrative}
              </p>
            </div>

            {/* Care Instructions */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-neutral-500 mb-4">
                Care & Maintenance
              </h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Professional cleaning recommended</li>
                <li>• Store in provided dust bag when not in use</li>
                <li>• Avoid prolonged exposure to direct sunlight</li>
                <li>• Handle with clean, dry hands</li>
              </ul>
            </div>

            {/* Acquire Button - PRIMARY ACTION */}
            <div className="pt-8">
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full px-8 py-5 bg-neutral-900 text-white text-sm tracking-wide uppercase hover:bg-neutral-800 transition-colors"
              >
                Acquire
              </button>
              <p className="text-xs text-neutral-500 text-center mt-4">
                Complimentary shipping on all orders • 14-day returns
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-24 border-t border-neutral-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-neutral-900">
                Craftsmanship
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Each piece is crafted by skilled artisans who uphold centuries-old techniques combined with modern precision.
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-neutral-900">
                Sustainability
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We source materials responsibly and maintain transparent supply chains to ensure ethical production.
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-neutral-900">
                Warranty
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                All items include a 2-year warranty covering manufacturing defects and craftsmanship issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}