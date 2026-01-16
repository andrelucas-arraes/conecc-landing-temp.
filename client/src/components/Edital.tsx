import { useState } from 'react';
import { Download, FileText, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Edital() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' as const }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: 'easeIn' as const }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <section id="edital" className="py-24 bg-[#F9F4F5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Edital de Submissão</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
          <p className="text-lg text-[#593234] leading-relaxed">
            Convidamos todos os profissionais e estudantes da área da saúde a submeterem seus trabalhos científicos
            para apresentação no I CONECC. Confira o edital completo com todas as informações sobre prazos,
            categorias e critérios de avaliação.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Categorias */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-md border-l-4 border-[#BC989A]"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="mb-4 p-3 bg-[#ECD5D7] rounded-lg w-fit">
              <FileText className="w-6 h-6 text-[#5D2126]" />
            </div>
            <h3 className="text-xl font-bold text-[#5D2126] mb-3">Categorias Aceitas</h3>
            <p className="text-[#593234] leading-relaxed">
              Trabalhos originais, relatos de caso, revisões sistemáticas e outras contribuições científicas.
            </p>
          </motion.div>

          {/* Premiações */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-md border-l-4 border-[#BC989A]"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="mb-4 p-3 bg-[#ECD5D7] rounded-lg w-fit">
              <FileText className="w-6 h-6 text-[#5D2126]" />
            </div>
            <h3 className="text-xl font-bold text-[#5D2126] mb-3">Premiações</h3>
            <p className="text-[#593234] leading-relaxed">
              Melhores trabalhos receberão certificados e prêmios especiais reconhecidos pela comunidade científica.
            </p>
          </motion.div>

          {/* Prazos */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-md border-l-4 border-[#BC989A]"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="mb-4 p-3 bg-[#ECD5D7] rounded-lg w-fit">
              <FileText className="w-6 h-6 text-[#5D2126]" />
            </div>
            <h3 className="text-xl font-bold text-[#5D2126] mb-3">Prazo de Submissão</h3>
            <p className="text-[#593234] leading-relaxed">
              Consulte o edital para datas e prazos importantes. Não perca a oportunidade de participar!
            </p>
          </motion.div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          className="flex flex-col gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <motion.a
              href="https://static.even3.com/geral/EditaldeSubmissao12.01.102a679be24b4ec8adde.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#5D2126] text-[#F9F4F5] font-bold rounded-lg transition-all duration-300 hover:bg-[#7D4E50] hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Baixar Edital Completo (PDF)
            </motion.a>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="p-3 bg-[#BC989A] text-[#5D2126] rounded-full transition-all duration-300 hover:bg-[#ECD5D7] hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Informações Importantes"
            >
              <Info className="w-5 h-5" />
            </motion.button>
          </div>
          <p className="text-sm text-[#8C5E60]">Arquivo em PDF com todas as informações</p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsModalOpen(false)}
            >
              {/* Modal Content */}
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-[#5D2126] hover:bg-[#ECD5D7] rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#ECD5D7] rounded-lg">
                    <Info className="w-6 h-6 text-[#5D2126]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#5D2126]">Informações Importantes</h3>
                </div>

                {/* Modal Body */}
                <ul className="space-y-4 text-[#593234]">
                  <li className="flex gap-3">
                    <span className="text-[#BC989A] font-bold text-lg">•</span>
                    <span>Submissões devem ser feitas através da plataforma online indicada no edital</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#BC989A] font-bold text-lg">•</span>
                    <span>Todos os trabalhos passarão por avaliação de comissão científica especializada</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#BC989A] font-bold text-lg">•</span>
                    <span>Os autores dos trabalhos selecionados receberão comunicação oficial por email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#BC989A] font-bold text-lg">•</span>
                    <span>Certificado de apresentação será fornecido para todos os trabalhos aceitos</span>
                  </li>
                </ul>

                {/* Modal Footer */}
                <div className="mt-8 flex justify-end">
                  <motion.button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 bg-[#5D2126] text-white font-semibold rounded-lg hover:bg-[#7D4E50] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Entendi
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

