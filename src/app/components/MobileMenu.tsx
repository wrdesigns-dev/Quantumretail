import { useState } from 'react';
import { Link } from 'react-router';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-[100] md:hidden bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-neutral-900 transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-full h-0.5 bg-neutral-900 transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-full h-0.5 bg-neutral-900 transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[95] md:hidden transform transition-transform duration-300 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-8">
          <ul className="flex flex-col gap-8">
            <li>
              <Link
                to="/collection/mens"
                className="text-xl text-neutral-700 hover:text-black transition-colors block"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Men's Collection
              </Link>
            </li>
            <li>
              <Link
                to="/collection/womens"
                className="text-xl text-neutral-700 hover:text-black transition-colors block"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Women's Collection
              </Link>
            </li>
            <li>
              <Link
                to="/seasonal-curations"
                className="text-xl text-neutral-700 hover:text-black transition-colors block"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Seasonal Curations
              </Link>
            </li>
          </ul>

          <div className="mt-auto pt-8 border-t border-neutral-200">
            <p
              className="text-2xl text-neutral-900 mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              QUANTUM
            </p>
            <p className="text-sm text-neutral-600">Architectural clarity in fashion</p>
          </div>
        </div>
      </nav>
    </>
  );
}