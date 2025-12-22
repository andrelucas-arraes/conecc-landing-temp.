import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence,  } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Palestrantes', href: '#palestrantes' },
    { label: 'Cursos Práticos', href: '#cursos' },
    { label: 'Programação', href: '#programacao' },
    { label: 'Edital', href: '#edital' },
    { label: 'Ingressos', href: '#ingressos' },
    { label: 'Contato', href: '#contato' },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#5D2126] text-[#F9F4F5] shadow-lg w-full"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="/images/logo.png"
            alt="CONECC Logo"
            className="h-8 sm:h-20 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[#D4B5B7] relative group focus-visible:outline-2 focus-visible:outline-[#BC989A] focus-visible:outline-offset-2 rounded"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BC989A] transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <motion.a
            href="#ingressos"
            className="px-8 py-3 bg-[#BC989A] text-[#5D2126] font-semibold rounded-lg transition-all duration-300 hover:bg-[#D4B5B7] hover:shadow-lg text-base focus-visible:outline-2 focus-visible:outline-[#BC989A] focus-visible:outline-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Inscreva-se no CONECC"
          >
            Inscreva-se
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2 hover:bg-[#7D4E50] rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#BC989A] focus-visible:outline-offset-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className="lg:hidden bg-[#593234] border-t border-[#7D4E50] overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-label="Menu de navegação mobile"
          >
            <motion.div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium hover:bg-[#7D4E50] rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#BC989A] focus-visible:outline-offset-2"
                  onClick={() => setMobileMenuOpen(false)}
                  variants={menuItemVariants}
                  aria-label={`Ir para seção ${item.label}`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#ingressos"
                className="px-4 py-2 bg-[#BC989A] text-[#5D2126] font-semibold rounded-lg text-center transition-all duration-200 hover:bg-[#D4B5B7]"
                onClick={() => setMobileMenuOpen(false)}
                variants={menuItemVariants}
              >
                Inscreva-se
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

