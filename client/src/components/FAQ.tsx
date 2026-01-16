import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Como recebo meu certificado?',
    answer: 'O certificado será disponibilizado digitalmente em até 30 dias após o término do evento, mediante comprovação de presença mínima de 75% nas atividades.',
  },
  {
    question: 'Há desconto para grupos?',
    answer: 'Sim! Grupos a partir de 5 pessoas têm desconto de 10%. Entre em contato através do email coneccpi@gmail.com ou WhatsApp para mais informações.',
  },
  {
    question: 'Posso me inscrever apenas nos cursos práticos?',
    answer: 'Sim, é possível se inscrever apenas nos cursos práticos (19-21 de março) ou apenas no congresso (26-29 de março), ou em ambos com desconto especial.',
  },
  {
    question: 'Há estacionamento disponível?',
    answer: 'Sim, o Auditório Ipê da Uninovafapi possui estacionamento próprio com capacidade para centenas de veículos, totalmente gratuito para participantes.',
  },
  {
    question: 'Posso cancelar minha inscrição?',
    answer: 'Sim, cancelamentos até 30 dias antes do evento têm reembolso de 80%. Entre 30 e 15 dias antes, 50% de reembolso. Menos de 15 dias, sem reembolso.',
  },
  {
    question: 'O congresso terá Anais?',
    answer: 'Sim. O Congresso contará com Anais oficiais, nos quais serão publicados os trabalhos científicos aprovados, conforme as normas e prazos estabelecidos pela Comissão Científica.',
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="faq" className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto" aria-hidden="true"></div>
          <p className="text-lg text-[#593234]">
            Tire suas dúvidas sobre o I CONECC. Se não encontrar a resposta que procura, entre em contato conosco.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[#D4B5B7] rounded-lg overflow-hidden bg-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              {/* Question Button */}
              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between group hover:bg-[#F9F4F5] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#5D2126] focus-visible:outline-offset-2"
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-bold text-[#5D2126] pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-[#BC989A]" aria-hidden="true" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className="overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={answerVariants}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-[#593234] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#593234] mb-4">Ainda tem dúvidas?</p>
          <motion.a
            href="#contato"
            className="inline-block px-8 py-4 bg-[#5D2126] text-[#F9F4F5] font-bold rounded-lg transition-all duration-300 hover:bg-[#7D4E50] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#BC989A] focus-visible:outline-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Entre em contato conosco"
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

