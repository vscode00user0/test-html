import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
}

export function Hero({ name, title }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium tracking-wide text-accent bg-accent/10 rounded-full border border-accent/20">
              Portfolio 2024
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="text-gradient">{name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-lg leading-relaxed">
              {title}. Designing experiences that make people smile.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover My Work
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-white border border-border text-foreground font-semibold shadow-sm hover:border-primary/50 transition-all"
                onClick={() => document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                My Hobbies
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl rotate-3 bg-secondary relative z-10 border-4 border-white">
              {/* Using Unsplash for a placeholder portrait - elegant, soft lighting */}
              {/* woman working on laptop in modern office soft light */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -rotate-6 translate-x-4 translate-y-4 -z-10" />
            <div className="absolute inset-0 bg-accent/10 rounded-3xl rotate-6 -translate-x-4 -translate-y-4 -z-20 blur-sm" />
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
