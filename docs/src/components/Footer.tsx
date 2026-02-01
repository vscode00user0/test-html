import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
        <p className="text-white/60 max-w-lg mx-auto mb-10 text-lg">
          I'm currently available for freelance projects and collaborations. 
          Drop me a line if you'd like to chat.
        </p>

        <a 
          href="mailto:arina@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-bold hover:bg-accent hover:text-white transition-all duration-300 mb-12 shadow-lg shadow-white/10"
        >
          <Mail className="w-5 h-5" />
          <span>arina@example.com</span>
        </a>

        <div className="flex justify-center gap-8 mb-12">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="p-3 rounded-full bg-white/10 hover:bg-primary hover:scale-110 transition-all duration-300 text-white"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2024 Arina. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with <span className="text-accent">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
