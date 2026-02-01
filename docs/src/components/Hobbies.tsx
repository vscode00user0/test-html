import { motion } from "framer-motion";
import { BookOpen, Coffee, Dumbbell, Gamepad, Globe, Music, Palette, Terminal } from "lucide-react";

interface HobbiesProps {
  hobbies: string[];
}

const iconMap: Record<string, any> = {
  "Programming": Terminal,
  "Reading": BookOpen,
  "Gaming": Gamepad,
  "Art": Palette,
  "Music": Music,
  "Travel": Globe,
  "Fitness": Dumbbell,
  "Coffee": Coffee
};

export function Hobbies({ hobbies }: HobbiesProps) {
  // Ensure we have a nice fallback if hobbies array is empty or short
  const displayHobbies = hobbies.length > 0 ? hobbies : ["Programming", "Reading", "Coffee", "Travel"];

  return (
    <section id="hobbies" className="py-24 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase text-sm"
          >
            What I Love
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-3"
          >
            My Passions & Hobbies
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayHobbies.map((hobby, idx) => {
            const Icon = iconMap[hobby] || SparklesIcon;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-xl mb-2">{hobby}</h3>
                <p className="text-muted-foreground text-sm">
                  {getHobbyDescription(hobby)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Fallback icon
function SparklesIcon(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  );
}

function getHobbyDescription(hobby: string): string {
  const descriptions: Record<string, string> = {
    "Programming": "Building digital worlds line by line.",
    "Reading": "Exploring new perspectives through books.",
    "Gaming": "Strategic thinking and interactive storytelling.",
    "Art": "Expressing creativity through visuals.",
    "Music": "Finding rhythm in the chaos of life.",
    "Travel": "Collecting moments from around the globe.",
    "Fitness": "Strength of body, clarity of mind.",
    "Coffee": "Fueling creativity one cup at a time."
  };
  return descriptions[hobby] || "Something I truly enjoy doing.";
}
