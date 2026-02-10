import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { Footer } from './Footer';

export function OurStory() {
  const { scrollYProgress } = useScroll();

  // Parallax effects for images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 150]);

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
            OUR STORY
          </h1>
          <div className="w-32" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-24 pb-32 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-5xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#7a9987] mb-8">
            EST. 2026 • A MODERN LEGACY
          </p>
          <h2
            className="text-6xl md:text-7xl lg:text-8xl mb-12 text-neutral-900 leading-[0.95]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 200, letterSpacing: '-0.02em' }}
          >
            Where Vision Meets<br />Personal Presence
          </h2>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#7a9987] to-transparent mx-auto mb-12" />
          <p className="text-neutral-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Quantum Retail reimagines the intersection of creative mastery and personal style,
            crafting a boutique experience where deep understanding amplifies the timeless art of curation.
          </p>
        </motion.div>
      </div>

      {/* Section 1: Sartorial Logic */}
      <section className="relative py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image - Architecture */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716249738093-623a70ad6531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjB3aGl0ZSUyMGNvbmNyZXRlfGVufDF8fHx8MTc3MDE1OTMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Minimalist Architecture"
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <h3
                className="text-5xl lg:text-7xl text-neutral-900"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                Sartorial Logic
              </h3>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-base lg:text-lg">
                <p>
                  Fashion has always been a language—one spoken through texture, silhouette, and the space
                  between fabric and skin. At Quantum Retail, we translate this language into a refined personal dialogue.
                </p>
                <p>
                  Our approach borrows from architectural principles: every collection is a structure,
                  every garment a considered line. We believe that true elegance emerges from the perfect balance of restraint and clarity.
                </p>
                <p className="italic text-neutral-500">
                  "The finest tailoring, like the quietest luxury, reveals nothing unnecessary."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </div>

      {/* Section 2: The Human Element */}
      <section className="relative py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8 lg:order-1"
            >
              <h3
                className="text-5xl lg:text-7xl text-neutral-900"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                The Human Element
              </h3>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-base lg:text-lg">
                <p>
                  Heritage inspires, but humans curate. Every ensemble we suggest, every rare piece we surface, 
                  and every collection we feature begins with the discerning eye of our atelier team.
                </p>
                <p>
                  We study how light falls on double-faced cashmere, how fine leather acquires a patina over time, 
                  and how a single hand-stitched seam can redefine a silhouette. This tactile knowledge informs our 
                  personalized service, honoring both the heritage of the craft and the intuition of the wearer.
                </p>
                <p>
                  The result? An experience that feels less like a transaction and more like a private consultation 
                  with a trusted confidant who understands the nuance of your aesthetic evolution.
                </p>
              </div>
            </motion.div>

            {/* Image - Fabric Texture */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden lg:order-2"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755224928593-352eeada6db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0dXJlJTIwY2xvc2UlMjB1cCUyMGx1eHVyeXxlbnwxfHx8fDE3NzAxNTkzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury Fabric Texture"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </div>

      {/* Section 3: Beyond the Algorithm */}
      <section className="relative py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image - Architecture with Shadows */}
            <motion.div
              style={{ y: y3 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756251585616-104f3d53ca94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzaGFkb3dzJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NzAxNTkzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Architecture"
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <h3
                className="text-5xl lg:text-7xl text-neutral-900"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: '-0.02em' }}
              >
                Beyond the Expected
              </h3>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-base lg:text-lg">
                <p>
                  While many houses prioritize the immediate, we prioritize resonance.
                </p>
                <p>
                  Our goal is not merely to show you what is new, but to introduce you to what you will treasure for a lifetime. 
                  This requires looking beyond simple trends, considering the harmony of the seasons, your personal aesthetic 
                  trajectory, and the ineffable quality of a perfect fit.
                </p>
                <p>
                  We have cultivated an environment that understands your preferences through the lens of time spent, 
                  textures explored, and silhouettes preferred. The result is a bespoke atmosphere that anticipates 
                  your desires before they are even voiced.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A New Paradigm Section - Full Width Featured */}
      <section className="relative py-48 px-8 bg-neutral-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.div style={{ y: y4 }} className="w-full h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1667312461902-d174231bbb40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NzAxNTkzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Brutalist Architecture"
              className="w-full h-full object-cover opacity-20 grayscale"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 via-neutral-900/95 to-neutral-900" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto text-center space-y-12"
        >
          <h3
            className="text-6xl lg:text-8xl mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: '-0.03em' }}
          >
            A New Paradigm
          </h3>

          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#7a9987] to-transparent mx-auto" />

          <div className="space-y-8 text-neutral-300 leading-relaxed text-lg lg:text-xl max-w-4xl mx-auto">
            <p>
              Quantum Retail represents a fundamental rethinking of the modern boutique—where the precision
              of masterful craftsmanship meets the soul of high-end tailoring.
            </p>
            <p>
              Designed for effortless performance and profound personalization, our house adapts to you. 
              Every interaction refines your style profile. Every selected piece informs future curations. 
              With every passing season, we deepen our understanding of your unique sartorial journey.
            </p>
            <p className="text-white text-xl lg:text-2xl font-light">
              This isn't just shopping. This is a wardrobe that evolves with you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Closing Statement with Large Fabric Image */}
      <section className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h3
                className="text-5xl lg:text-6xl text-neutral-900"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                The Journey Begins
              </h3>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-base lg:text-lg">
                <p>
                  Every great wardrobe tells a story. Every curated collection represents a dialogue
                  between aspiration and authenticity, between trend and timelessness.
                </p>
                <p>
                  We invite you to experience retail reimagined—where every recommendation is
                  considered, every curation is intentional, and every piece is chosen to become
                  part of your evolving narrative.
                </p>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/collection/mens"
                  className="inline-flex items-center gap-4 text-sm lg:text-base tracking-wide uppercase border-b-2 border-[#7a9987] pb-2 text-[#7a9987] hover:gap-6 transition-all duration-300"
                >
                  Experience the Curation
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image - Cashmere Texture */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1532526674046-5b3f6d7d2ab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHdvb2wlMjB0ZXh0dXJlJTIwZGV0YWlsfGVufDF8fHx8MTc3MDE1OTMxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cashmere Texture Detail"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}