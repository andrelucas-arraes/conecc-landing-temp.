import { Users, Microscope, Network } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      icon: Users,
      title: 'Palestrantes de Renomados',
      description:
        'Presença de professores, pesquisadores e líderes nacionais e internacionais, trazendo conteúdo atualizado e discussões de alto nível em diversas áreas da medicina.',
    },
    {
      icon: Microscope,
      title: 'Produção Científica',
      description:
        'Apresentação de pesquisas inovadoras, com espaço dedicado ao debate sobre os avanços mais recentes e às perspectivas futuras da prática médica.',
    },
    {
      icon: Network,
      title: 'Networking Estratégico',
      description:
        'Ambientes pensados para promover conexões entre estudantes, especialistas, instituições e profissionais que são referência no cenário da saúde.',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="sobre" className="py-24 bg-[#F9F4F5]" aria-labelledby="sobre-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 id="sobre-heading" className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">
            Sobre o Evento
          </h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto" aria-hidden="true"></div>
          <p className="text-lg text-[#593234] leading-relaxed mb-6">
            O CONECC – I Congresso de Especialidades Clínicas e Cirúrgicas surge como uma iniciativa inovadora que visa integrar múltiplas áreas da medicina, promovendo atualização científica, troca de experiências e construção de networking qualificado entre profissionais e estudantes da saúde.
          </p>
          <p className="text-lg text-[#593234] leading-relaxed">
            Com o tema "Multiespecialidades e o Futuro da Medicina: Ciência, Prática e Inovação", o congresso reúne uma programação robusta, palestrantes de destaque nacional e cursos práticos que proporcionam vivências reais, alinhadas às demandas atuais da formação e da assistência em saúde.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#BC989A]"
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4 p-3 bg-[#ECD5D7] rounded-lg w-fit">
                  <Icon className="w-6 h-6 text-[#5D2126]" />
                </div>
                <h3 className="text-xl font-bold text-[#5D2126] mb-3">{highlight.title}</h3>
                <p className="text-[#8C5E60] leading-relaxed">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="mt-16 flex items-center gap-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1 h-px bg-linear-to-r from-[#BC989A] to-transparent"></div>
          <div className="w-2 h-2 bg-[#BC989A] rounded-full"></div>
          <div className="flex-1 h-px bg-linear-to-l from-[#BC989A] to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}

