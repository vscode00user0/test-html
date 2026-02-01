import { motion } from "framer-motion";
import { Sparkles, Code, Heart } from "lucide-react";

interface AboutProps {
  bio: string;
}

export function About({ bio }: AboutProps) {
  const features = [
    { icon: Code, label: "Developer", desc: "Crafting clean code" },
    { icon: Sparkles, label: "Designer", desc: "Pixel perfect detail" },
    { icon: Heart, label: "Creator", desc: "Building with passion" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              More than just code.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {bio}
              </p>
              <p>
                My journey began with a curiosity for how things work on the web, and it has evolved into a passion for building intuitive and beautiful digital experiences.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="p-4 rounded-xl bg-secondary/30 border border-secondary text-center hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-primary mb-3">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-12">
                {/* coding setup minimal desk */}
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" 
                  alt="Workspace"
                />
                {/* abstract art pink purple */}
                <img 
                  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&q=80" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" 
                  alt="Abstract Art"
                />
              </div>
              <div className="space-y-4">
                 {/* woman holding coffee cup smiling */}
                 <img 
                  src="https://pixabay.com/get/g42b734a5b3e8cc19c0c090ed461b6b6c9acf4702d15e9b25f6e82450301e4081bd2b28741b70fd41f3bb763d8363aeed29ee6b24f77dcf07d3d190cd68511d14_1280.jpg" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" 
                  alt="Coding"
                />
                {/* code on screen close up */}
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" 
                  alt="Code"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
