import { MapPin, Mail, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-[#5D2126] text-[#F9F4F5] py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Location */}
          <motion.div
            className="flex flex-col gap-2 text-center items-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#BC989A]" />
              <h4 className="font-bold text-lg">Localização</h4>
            </div>
            <p className="text-[#D4B5B7] leading-relaxed">
              Auditório Principal da Faculdade CET
            </p>
            <p className="text-[#D4B5B7] text-sm leading-relaxed">
              Rua Rio Grande do Norte, 790, Pirajá.<br />
              CEP: 64002-150 - Teresina, Piauí
            </p>
            <motion.a
              href="https://maps.app.goo.gl/ddfp8uLcvd6vDuyQA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BC989A] hover:text-[#D4B5B7] transition-colors duration-200 font-semibold text-sm mt-1 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Abrir no Google Maps →
            </motion.a>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex flex-col gap-2 text-center items-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-[#BC989A]" />
              <h4 className="font-bold text-lg">Email</h4>
            </div>
            <motion.a
              href="mailto:coneccpi@gmail.com"
              className="text-[#D4B5B7] hover:text-[#BC989A] transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              coneccpi@gmail.com
            </motion.a>
          </motion.div>

          {/* Instagram */}
          <motion.div
            className="flex flex-col gap-2 text-center items-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Instagram className="w-5 h-5 text-[#BC989A]" />
              <h4 className="font-bold text-lg">Instagram</h4>
            </div>
            <motion.a
              href="https://instagram.com/coneccpi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4B5B7] hover:text-[#BC989A] transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              @coneccpi
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-[#7D4E50] my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-[#D4B5B7] text-sm">
            © 2026 CONECC. Todos os direitos reservados.
          </p>
          <p className="text-[#A67B7D] text-xs mt-2">
            I Congresso de Especialidades Clínicas e Cirúrgicas
          </p>
          <p className="text-[#7D4E50] text-xs mt-4 opacity-70">
            Desenvolvido por{' '}
            <motion.a
              href="https://github.com/andrearraesDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A67B7D] hover:text-[#BC989A] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              André Arraes
            </motion.a>
            {' e '}
            <motion.a
              href="https://gabriellucasafb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A67B7D] hover:text-[#BC989A] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Gabriel Lucas
            </motion.a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

