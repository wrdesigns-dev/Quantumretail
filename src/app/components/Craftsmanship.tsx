import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { Footer } from './Footer';

export function Craftsmanship() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const materials = [
    {
      name: 'Double-Faced Cashmere',
      origin: 'Inner Mongolia',
      feel: 'Cloud-soft with structural integrity',
      image: 'https://images.unsplash.com/photo-1718587608491-f40ae3b13273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMGZhYnJpYyUyMHRleHR1cmUlMjBtYWNybyUyMGNsb3NlfGVufDF8fHx8MTc3MDE2MDA2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Full-Grain Calfskin',
      origin: 'Tuscany, Italy',
      feel: 'Supple with a natural patina',
      image: 'https://images.unsplash.com/photo-1595066989325-465d1db69c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZ3JhaW4lMjB0ZXh0dXJlJTIwZGV0YWlsJTIwbWFjcm98ZW58MXx8fHwxNzcwMTYwMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Hand-Rolled Silk',
      origin: 'Como, Italy',
      feel: 'Luminous with whispered drape',
      image: 'https://images.unsplash.com/photo-1642779978153-f5ed67cdecb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwZmFicmljJTIwdGV4dHVyZSUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcwMTYwMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Merino Wool',
      origin: 'Biella, Italy',
      feel: 'Resilient with four-season versatility',
      image: 'https://images.unsplash.com/photo-1756362400728-4038e18281df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29sJTIwZmFicmljJTIwdGV4dHVyZSUyMGRldGFpbHxlbnwxfHx8fDE3NzAxNjAwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Irish Linen',
      origin: 'County Down, Ireland',
      feel: 'Crisp with an honest hand',
      image: 'https://images.unsplash.com/photo-1677043293134-9cc99308fe81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGZhYnJpYyUyMHdlYXZlJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAxNjAwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Silk Crepe de Chine',
      origin: 'Lyon, France',
      feel: 'Fluid with restrained elegance',
      image: 'https://images.unsplash.com/photo-1769710230436-db6353a08af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwZmFicmljJTIwdGV4dHVyZSUyMGx1eHVyeSUyMGRldGFpbHxlbnwxfHx8fDE3NzAxNTkzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#fafaf8]">
      {/* Fixed Navigation Header */}
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
            CRAFTSMANSHIP
          </h1>
          <div className="w-32" />
        </div>
      </div>

      {/* Hero Section: The Mastery of Form */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-8 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative w-full max-w-5xl aspect-[3/4] md:aspect-[16/10]"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1632809681383-e9e696a6d269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMGZvcm0lMjBtYW5uZXF1aW4lMjBzdHVkaW8lMjBtaW5pbWFsfGVufDF8fHx8MTc3MDE2MDA2NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dress Form Studio"
            className="w-full h-full object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-16 left-0 right-0 text-center px-8"
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl text-neutral-900 mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: '-0.02em' }}
          >
            The Mastery of Form
          </h2>
          <p className="text-neutral-600 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Every garment begins as an idea—a whisper of shape and shadow. In our atelier, 
            form emerges through patient deliberation, where each line serves purpose and every seam tells a story.
          </p>
        </motion.div>
      </section>

      {/* The Weight of Heritage */}
      <section className="relative py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-5xl lg:text-6xl text-neutral-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              The Weight of Heritage
            </h3>
            <div className="h-px w-32 bg-neutral-300 mx-auto mb-8" />
            <p className="text-neutral-600 leading-relaxed text-base lg:text-lg max-w-3xl mx-auto">
              True craftsmanship carries the weight of centuries. Each technique we employ has been refined 
              across generations—passed from master to apprentice, preserved not in manuals but in muscle memory, 
              in the knowledge of when to press and when to release, when structure serves and when fluidity prevails.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1659147922585-fd07e0d5e9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWlsb3IlMjB3b3Jrc3BhY2UlMjBoYW5kcyUyMHN0aXRjaGluZ3xlbnwxfHx8fDE3NzAxNjAwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tailor's Hands at Work"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </motion.div>
      </section>

      {/* Material Pedigree Section */}
      <section className="relative py-32 px-8 bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-5xl lg:text-6xl text-neutral-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Sourced for Longevity
            </h3>
            <div className="h-px w-32 bg-neutral-300 mx-auto mb-8" />
            <p className="text-neutral-600 leading-relaxed text-base lg:text-lg max-w-3xl mx-auto">
              We source materials as one might select a collaborator—with careful consideration of character, 
              provenance, and the promise of enduring partnership. Each textile arrives with its own history, 
              its own inherent logic of drape and resilience.
            </p>
          </motion.div>
        </div>

        {/* Material Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden mb-4 bg-white">
                  <ImageWithFallback
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h4
                    className="text-xl text-neutral-900"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    {material.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    {material.origin}
                  </p>
                  <p className="text-sm text-neutral-600 italic leading-relaxed">
                    {material.feel}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atelier Process */}
      <section className="relative py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-5xl lg:text-6xl text-neutral-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              The Precision of the Hand
            </h3>
            <div className="h-px w-32 bg-neutral-300 mx-auto mb-8" />
            <p className="text-neutral-600 leading-relaxed text-base lg:text-lg max-w-3xl mx-auto">
              From the first sketch to the final stitch, each stage of creation demands its own form of restraint. 
              The hand that draws must know when to hesitate. The hand that cuts must trust in negative space. 
              The hand that sews must understand that perfection lies not in uniformity, but in intention.
            </p>
          </motion.div>
        </div>

        {/* Three Sequential Images */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image 1: Sketch */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586447795212-b8ea5253ac2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2tldGNoJTIwZHJhd2luZyUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMTYwMDY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fashion Sketch"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-xs uppercase tracking-widest text-neutral-500">Stage One</p>
                <h4
                  className="text-2xl text-neutral-900"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  Architectural Vision
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Each design begins with a dialogue between pencil and paper—capturing not just form, 
                  but the essence of movement and repose.
                </p>
              </div>
            </motion.div>

            {/* Image 2: Fabric Selection */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1532526674046-5b3f6d7d2ab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHdvb2wlMjB0ZXh0dXJlJTIwZGV0YWlsfGVufDF8fHx8MTc3MDE1OTMxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Material Selection"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-xs uppercase tracking-widest text-neutral-500">Stage Two</p>
                <h4
                  className="text-2xl text-neutral-900"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  Material Communion
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  The right textile reveals itself—its weight, drape, and character informing every 
                  subsequent decision in the making.
                </p>
              </div>
            </motion.div>

            {/* Image 3: Hand Stitching */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1681061660434-b3110df2b6b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwc2V3aW5nJTIwbmVlZGxlJTIwdGhyZWFkJTIwY3JhZnR8ZW58MXx8fHwxNzcwMTYwMDY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hand Stitching"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-xs uppercase tracking-widest text-neutral-500">Stage Three</p>
                <h4
                  className="text-2xl text-neutral-900"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  The Final Gesture
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  In the quiet rhythm of hand-stitching, intention becomes permanent—each pass of the 
                  needle a commitment to longevity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-32 px-8 bg-[#fafaf8]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h3
            className="text-4xl lg:text-5xl text-neutral-900"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Legacy in Every Line
          </h3>
          <div className="h-px w-24 bg-neutral-300 mx-auto" />
          <p className="text-neutral-600 leading-relaxed text-base lg:text-lg">
            What we create is not subject to the whims of seasons or trends. Each piece is designed to become 
            a constant—a garment that improves with time, that adapts to your life, that carries your story forward. 
            This is the soul of tailoring: the patient pursuit of the enduring over the ephemeral.
          </p>
          
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            className="pt-8"
          >
            <Link
              to="/collection/mens"
              className="inline-flex items-center gap-4 text-sm lg:text-base tracking-wide uppercase border-b-2 border-[#7a9987] pb-2 text-[#7a9987] hover:gap-6 transition-all duration-300"
            >
              Explore the Collection
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}