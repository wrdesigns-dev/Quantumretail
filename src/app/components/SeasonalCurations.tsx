import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { Footer } from './Footer';

export function SeasonalCurations() {
  const { scrollYProgress } = useScroll();

  // Refined Parallax transforms with max 15% offset
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const curatedItems = [
    {
      id: 'architectural-coat',
      name: 'The Architectural Coat',
      material: 'Double-Faced Cashmere',
      price: 3800,
      image: 'https://images.unsplash.com/photo-1680690395101-1b2a56c0ac21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBmYXNoaW9uJTIwY29hdCUyMGVkaXRvcmlhbCUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMTU2NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'A study in geometric precision. Where structure meets warmth, this piece redefines winter elegance through architectural form.',
      imagePosition: 'left',
    },
    {
      id: 'refined-cashmere-sweater',
      name: 'The Essential Knit',
      material: 'Grade A Cashmere',
      price: 1680,
      image: 'https://images.unsplash.com/photo-1642853474532-9aca78f70629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMGtuaXQlMjB0ZXh0dXJlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAxNTY1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'Woven silence. The tactile whisper of mongolian plains, transformed into cloud-soft armor against winter\'s breath.',
      imagePosition: 'right',
    },
    {
      id: 'merino-turtleneck',
      name: 'The Refined Turtleneck',
      material: 'Extra Fine Merino Wool',
      price: 890,
      image: 'https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJ0bGVuZWNrJTIwc3dlYXRlciUyMG1pbmltYWwlMjBmYXNoaW9ufGVufDF8fHx8MTc3MDE1OTAzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'The foundation of winter wardrobes. Timeless simplicity that speaks through its impeccable construction and luxurious hand-feel.',
      imagePosition: 'left',
    },
    {
      id: 'leather-portfolio',
      name: 'The Refined Portfolio',
      material: 'Vegetable-Tanned Leather',
      price: 780,
      image: 'https://images.unsplash.com/photo-1621735320171-a682f45d7172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYnJpZWZjYXNlJTIwbWluaW1hbCUyMGx1eHVyeXxlbnwxfHx8fDE3NzAxNTY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'Timeless utility. Each surface tells stories through its patina—a living archive of journeys taken.',
      imagePosition: 'right',
    },
    {
      id: 'silk-scarf',
      name: 'The Heritage Scarf',
      material: 'Pure Silk Twill',
      price: 420,
      image: 'https://images.unsplash.com/photo-1738774106981-cc24d010cdb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2NhcmYlMjBsdXh1cnklMjBtaW5pbWFsJTIwd2ludGVyfGVufDF8fHx8MTc3MDE1OTAzNXww&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'Delicate armor against the cold. Wrapped in centuries of craft, each fold a testament to the marriage of function and artistry.',
      imagePosition: 'left',
    },
    {
      id: 'sculptural-midi-dress',
      name: 'The Sculptural Form',
      material: 'Japanese Cotton-Silk Blend',
      price: 2950,
      image: 'https://images.unsplash.com/photo-1762605135012-56a59a059e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzY2FyZiUyMGx1eHVyeSUyMG1pbmltYWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzcwMTU2NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'Movement captured in fabric. Fluid architecture that responds to the body\'s poetry, draping light itself.',
      imagePosition: 'right',
    },
    {
      id: 'wool-trousers',
      name: 'The Tailored Trouser',
      material: 'Italian Virgin Wool',
      price: 1280,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdHJvdXNlcnMlMjBmYXNoaW9uJTIwZWRpdG9yaWFsfGVufDF8fHx8MTczODU4NDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'Precision in every line. The perfect silhouette born from generations of sartorial wisdom and modern restraint.',
      imagePosition: 'left',
    },
    {
      id: 'chelsea-boots',
      name: 'The Chelsea Boot',
      material: 'Full-Grain Leather',
      price: 1450,
      image: 'https://images.unsplash.com/photo-1725387023639-28e9a42a83b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBtaW5pbWFsJTIwbHV4dXJ5JTIwZWRpdG9yaWFsfGVufDF8fHx8MTc3MDE1OTMwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'Timeless elegance meets enduring functionality. Handcrafted heritage that walks the line between formal refinement and everyday ease.',
      imagePosition: 'right',
    },
    {
      id: 'oversized-scarf',
      name: 'The Statement Scarf',
      material: 'Cashmere-Wool Blend',
      price: 680,
      image: 'https://images.unsplash.com/photo-1603906650843-b58e94d9df4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHNjYXJmJTIwbWluaW1hbCUyMHdpbnRlciUyMGx1eHVyeXxlbnwxfHx8fDE3NzAxNTkzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      poeticDescription: 'Enveloping warmth that transforms the everyday. A canvas of texture and drape that speaks to the poetry of layered dressing.',
      imagePosition: 'left',
    },
  ];

  return (
    <div className="relative min-h-[400vh] lg:min-h-[400vh] bg-[#fafaf8] overflow-hidden">
      {/* Floating Background Elements - Desktop only */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none overflow-hidden">
        {/* Translucent geometric shapes */}
        <motion.div 
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-[10%] left-[5%] w-96 h-96 rounded-full bg-gradient-to-br from-[#e8f4f0]/20 to-transparent blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[40%] right-[10%] w-[30rem] h-[30rem] bg-gradient-to-tl from-[#d4e8e0]/15 to-transparent blur-3xl"
        />
        <motion.div 
          style={{ y: y3, rotate: rotate2 }}
          className="absolute top-[70%] left-[20%] w-80 h-80 rounded-full bg-gradient-to-br from-[#c9dcd4]/10 to-transparent blur-3xl"
        />
        
        {/* Light refraction lines */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[25%] right-[30%] w-px h-96 bg-gradient-to-b from-transparent via-[#a8c5b8]/30 to-transparent"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[60%] left-[40%] w-px h-72 bg-gradient-to-b from-transparent via-[#a8c5b8]/20 to-transparent"
        />
      </div>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/70 backdrop-blur-xl border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm tracking-wide text-neutral-700 hover:text-black transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Return to Home
          </Link>
          <h1
            className="text-xl tracking-[0.2em] text-neutral-800"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            WINTER SOLSTICE
          </h1>
          <div className="w-32" />
        </div>
      </div>

      {/* Hero Title - Fades as you scroll */}
      <motion.div 
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <div className="text-center px-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs uppercase tracking-[0.4em] text-[#7a9987] mb-8"
          >
            Winter 2026 • Ephemeral Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-7xl md:text-8xl lg:text-9xl mb-12 text-neutral-900"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 200, letterSpacing: '-0.02em' }}
          >
            Quietude
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-px w-48 bg-gradient-to-r from-transparent via-[#7a9987] to-transparent mx-auto mb-12"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-neutral-600 text-lg leading-relaxed max-w-xl mx-auto"
          >
            A curated meditation on winter's clarity. Five pieces that speak softly of warmth, craft, and enduring beauty.
          </motion.p>
        </div>
      </motion.div>

      {/* Floating Curated Items */}
      <div className="relative py-24">
        {/* Desktop: Side-by-side alternating layout */}
        <div className="hidden lg:block max-w-7xl mx-auto px-8 space-y-32">
          {curatedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/product/${item.id}`} className="group block">
                <div className={`grid grid-cols-2 gap-16 items-center ${item.imagePosition === 'right' ? 'direction-rtl' : ''}`}>
                  {/* Image */}
                  <motion.div 
                    className="relative aspect-[4/5] overflow-hidden bg-white shadow-2xl shadow-black/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Hover shimmer effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%', y: '-100%' }}
                      whileHover={{ 
                        x: '100%', 
                        y: '100%',
                        transition: { duration: 1.5, ease: "easeInOut" }
                      }}
                    />

                    {/* Curated Badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 z-10">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#7a9987]" style={{ fontFamily: 'monospace' }}>
                        #{String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div 
                    className={`${item.imagePosition === 'right' ? 'direction-ltr' : ''}`}
                    initial={{ opacity: 0, x: item.imagePosition === 'left' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3
                      className="text-5xl mb-6 text-neutral-900"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                      {item.name}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed mb-8 italic text-lg">
                      {item.poeticDescription}
                    </p>

                    <div className="flex items-baseline gap-4 mb-8">
                      <p className="text-xs uppercase tracking-widest text-neutral-400" style={{ fontFamily: 'monospace' }}>
                        {item.material}
                      </p>
                      <span className="text-neutral-300">•</span>
                      <p className="text-lg text-neutral-900">${item.price.toLocaleString()}</p>
                    </div>

                    <motion.div
                      className="inline-flex items-center gap-3 text-sm tracking-wide uppercase border-b border-[#7a9987] pb-1 text-[#7a9987] group-hover:gap-5 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      View Curated Piece
                      <span className="text-xs">→</span>
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: Editorial single-column stack */}
        <div className="lg:hidden space-y-24 px-6 max-w-2xl mx-auto">
          {curatedItems.map((item, index) => (
            <motion.div
              key={`mobile-${item.id}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/product/${item.id}`} className="group block">
                <div className="relative">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-xl shadow-black/5 mb-8">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Curated Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#7a9987]" style={{ fontFamily: 'monospace' }}>
                        #{String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3
                      className="text-3xl text-neutral-900"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                      {item.name}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed italic text-sm">
                      {item.poeticDescription}
                    </p>

                    <div className="flex items-baseline gap-3 pt-2">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-400" style={{ fontFamily: 'monospace' }}>
                        {item.material}
                      </p>
                      <span className="text-neutral-300">•</span>
                      <p className="text-sm text-neutral-900">${item.price.toLocaleString()}</p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs tracking-wide uppercase border-b border-[#7a9987] pb-1 text-[#7a9987] group-hover:gap-4 transition-all duration-300 mt-4">
                      View Curated Piece
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing Statement - appears at the end */}
      <motion.div 
        className="relative mt-24 min-h-screen flex items-center justify-center py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-center px-8 max-w-3xl">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#7a9987] to-transparent mx-auto mb-12" />
          <h3
            className="text-4xl lg:text-5xl mb-8 text-neutral-900"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            The Philosophy of Quietude
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-8 text-sm lg:text-base">
            In an age of excess, we curate restraint. Each piece in this collection represents our commitment 
            to thoughtful design—garments and accessories that speak through silence, that celebrate the space 
            between moments, that honor the wearer's individuality through understated excellence.
          </p>
          <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed mb-16">
            This seasonal curation is not a trend, but a dialogue with time. These pieces are designed to 
            accompany you through winters yet to come, aging gracefully as they become part of your story.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/collection/mens"
              className="inline-flex items-center justify-center gap-3 text-xs lg:text-sm tracking-wide uppercase border border-neutral-900 px-8 lg:px-10 py-4 lg:py-5 hover:bg-neutral-900 hover:text-white transition-all"
            >
              Explore Men's Collection
              <span className="text-xs">→</span>
            </Link>
            <Link
              to="/collection/womens"
              className="inline-flex items-center justify-center gap-3 text-xs lg:text-sm tracking-wide uppercase border border-neutral-900 px-8 lg:px-10 py-4 lg:py-5 hover:bg-neutral-900 hover:text-white transition-all"
            >
              Explore Women's Collection
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Final Footer Note */}
      <Footer />
    </div>
  );
}