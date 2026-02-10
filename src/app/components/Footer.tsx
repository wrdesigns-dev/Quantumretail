import { Link } from 'react-router';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-16 px-8 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 
              className="text-2xl mb-4 text-neutral-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              QUANTUM
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Architectural clarity in fashion. Premium ready-to-wear for the discerning individual.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4 text-neutral-900">Collections</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><Link to="/collection/mens" onClick={scrollToTop} className="hover:text-neutral-900 transition-colors">Men's Collection</Link></li>
              <li><Link to="/collection/womens" onClick={scrollToTop} className="hover:text-neutral-900 transition-colors">Women's Collection</Link></li>
              <li><Link to="/seasonal-curations" onClick={scrollToTop} className="hover:text-neutral-900 transition-colors">Seasonal Curations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4 text-neutral-900">About</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><Link to="/our-story" onClick={scrollToTop} className="hover:text-neutral-900 transition-colors">Our Story</Link></li>
              <li><Link to="/craftsmanship" onClick={scrollToTop} className="hover:text-neutral-900 transition-colors">Craftsmanship</Link></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4 text-neutral-900">Connect</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-neutral-900 transition-colors">Appointments</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
          <p>© 2026 Quantum Retail. All rights reserved. Powered by wrdesigns</p>
        </div>
      </div>
    </footer>
  );
}