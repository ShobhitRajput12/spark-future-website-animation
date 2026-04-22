import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Campus", href: "#campus" },
    { name: "Achievements", href: "#achievements" },
    { name: "Admissions", href: "#admissions" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out",
          isScrolled
            ? "bg-[#00000f]/85 backdrop-blur-[20px] border-b border-white/10"
            : "bg-transparent",
          "h-[48px] md:h-[64px]"
        )}
      >
        <div className={cn(
          "h-full flex items-center justify-between transition-all duration-400",
          "px-4 md:px-[18px]"
        )}>
          {/* Logo & Academy Name */}
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0">
            <div className={cn(
              "bg-white text-black flex items-center justify-center font-bold transition-all duration-500 group-hover:bg-gold rounded-sm shrink-0",
              "w-6 h-6 md:w-[34px] md:h-[34px]",
              "text-[10px] md:text-[13px]"
            )}>
              S
            </div>
            <div className={cn(
              "font-sans font-bold tracking-tighter text-white transition-all duration-400 leading-[1.3] md:leading-tight",
              "text-[8px] md:text-[14px]",
              "max-w-[180px] md:max-w-none",
              "overflow-hidden whitespace-normal"
            )} style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              <span className="md:hidden uppercase">
                SPARK FUTURE LEADERS ACADEMY
              </span>
              <span className="hidden md:inline uppercase">
                SPARK FUTURE LEADERS ACADEMY
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium uppercase tracking-[0.02em] text-white/85 hover:text-white transition-colors px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section: Login & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Cadet Login - Hidden on Mobile, Visible on Tablet/Desktop */}
            <button className={cn(
              "hidden md:block btn-tesla-secondary whitespace-nowrap transition-all duration-400",
              "text-[13px]",
              "md:px-2 md:py-1 lg:px-3 lg:py-1.5"
            )}>
              CADET LOGIN
            </button>

            {/* Hamburger Menu - Visible on Tablet/Mobile */}
            <button
              className="md:hidden p-1 text-white hover:text-gold transition-colors shrink-0"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-[#00000f] flex flex-col items-center justify-center p-6"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Nav Links */}
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] font-bold text-white hover:text-gold transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Cadet Login in Menu (Visible on Mobile/Tablet in Menu) */}
              <button className="btn-tesla-primary mt-4 px-8 py-3 text-[14px]">
                CADET LOGIN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
