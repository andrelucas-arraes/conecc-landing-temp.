import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const infoCardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative w-full pt-5 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero_banner.png)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#5D2126]/95 via-[#5D2126]/85 to-[#5D2126]/75"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 bg-[#BC989A]/20 border border-[#BC989A] rounded-full"
          >
            <span className="text-[#D4B5B7] text-sm font-semibold tracking-wide">I EDIÇÃO</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-[#F9F4F5] mb-6 leading-tight"
          >
            CONECC
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-[#D4B5B7] font-light mb-8 leading-relaxed"
          >
            I Congresso de Especialidades Clínicas e Cirúrgicas
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#ECD5D7] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Multiespecialidades e o Futuro da Medicina: Ciência, Prática e Inovação
          </motion.p>

          {/* Key Info */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-[#F9F4F5]"
          >
            <motion.div
              variants={infoCardVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <p className="text-sm text-[#D4B5B7] mb-2">Cursos Práticos</p>
              <p className="text-xl font-semibold">19 a 21 de março</p>
            </motion.div>
            <motion.div
              variants={infoCardVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <p className="text-sm text-[#D4B5B7] mb-2">Congresso</p>
              <p className="text-xl font-semibold">26 a 29 de março</p>
            </motion.div>
            <motion.div
              variants={infoCardVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <p className="text-sm text-[#D4B5B7] mb-2">Local</p>
              <p className="text-xl font-semibold">Teresina, PI</p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#ingressos"
            className="inline-block px-8 py-4 bg-[#BC989A] text-[#5D2126] font-bold text-lg rounded-lg transition-all duration-300 hover:bg-[#D4B5B7] hover:shadow-2xl"
          >
            Garantir Minha Vaga
          </motion.a>
        </motion.div>
      </div>

      {/* Diagonal Divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-[#F9F4F5]"
        style={{
          clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)',
        }}
      ></div>
    </section>
  );
}
