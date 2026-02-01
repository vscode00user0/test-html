import { Link } from "wouter";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export function Navigation() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto"
    >
      <Link href="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-foreground">Arina</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {["About", "Hobbies", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2.5 rounded-full bg-foreground text-background font-medium text-sm shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Say Hello
      </motion.button>
    </motion.header>
  );
}
