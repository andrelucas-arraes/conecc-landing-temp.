import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TicketCategory {
  category: string;
  price: string;
  soldOut?: boolean;
}

interface TicketBatch {
  name: string;
  subtitle?: string;
  vacancies: string;
  totalVacancies: number;
  remainingVacancies?: number;
  deadline?: string;
  categories: TicketCategory[];
  highlighted?: boolean;
  disabled?: boolean;
  soldOut?: boolean;
}

const ticketBatches: TicketBatch[] = [
  {
    name: 'LOTE PROMOCIONAL',
    vacancies: '',
    totalVacancies: 50,
    remainingVacancies: 12,
    deadline: '',
    categories: [
      { category: 'Estudantes', price: 'ESGOTADO' },
      { category: 'Médicos/Residentes', price: 'ESGOTADO' },
      { category: 'Profissionais de outras áreas', price: 'ESGOTADO' },
      { category: 'Grupo de 05 participantes', price: 'ESGOTADO' },
    ],
    highlighted: false,
    soldOut: true,
  },
  {
    name: '1º LOTE',
    vacancies: '',
    totalVacancies: 50,
    remainingVacancies: 35,
    categories: [
      { category: 'Estudantes', price: 'R$ 160,00' },
      { category: 'Médicos/Residentes', price: 'R$ 200,00' },
      { category: 'Profissionais de outras áreas', price: 'R$ 180,00' },
      { category: 'Grupo de 05 participantes', price: 'R$ 136,00 por pessoa' },
    ],
    disabled: false,
    highlighted: true,
  },
  {
    name: '2º LOTE',
    vacancies: '',
    totalVacancies: 150,
    remainingVacancies: 150,
    categories: [
      { category: 'Estudantes', price: 'Em breve' },
      { category: 'Médicos/Residentes', price: 'Em breve' },
      { category: 'Profissionais de outras áreas', price: 'Em breve' },
      { category: 'Grupo de 05 participantes', price: 'Em breve' },
    ],
    disabled: true,
  },
  {
    name: '3º LOTE',
    vacancies: '',
    totalVacancies: 150,
    remainingVacancies: 150,
    categories: [
      { category: 'Estudantes', price: 'Em breve' },
      { category: 'Médicos/Residentes', price: 'Em breve' },
      { category: 'Profissionais de outras áreas', price: 'Em breve' },
      { category: 'Grupo de 05 participantes', price: 'Em breve' },
    ],
    disabled: true,
  },
  {
    name: '4º LOTE',
    vacancies: '',
    totalVacancies: 150,
    remainingVacancies: 150,
    categories: [
      { category: 'Estudantes', price: 'Em breve' },
      { category: 'Médicos/Residentes', price: 'Em breve' },
      { category: 'Profissionais de outras áreas', price: 'Em breve' },
      { category: 'Grupo de 05 participantes', price: 'Em breve' },
    ],
    disabled: true,
  },
];

export default function Tickets() {
  const [expandedBatch, setExpandedBatch] = useState<number | null>(1);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const batchVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const categoriesVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="ingressos" className="py-24 bg-[#F9F4F5]" aria-labelledby="ingressos-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 id="ingressos-heading" className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Ingressos e Preços</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto" aria-hidden="true"></div>
          <p className="text-lg text-[#593234]">
            Escolha o plano que melhor se adequa ao seu perfil e garanta sua presença no I CONECC.
          </p>
        </motion.div>

        {/* Batches Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {ticketBatches.map((batch, index) => (
            <motion.div
              key={index}
              className={`border-l-4 ${batch.highlighted ? 'border-[#5D2126]' : 'border-[#BC989A]'} overflow-hidden ${batch.soldOut ? 'grayscale-[0.5] opacity-80' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={batchVariants}
              transition={{ delay: index * 0.1 }}
            >
              {/* Batch Header */}
              <motion.button
                onClick={() => !batch.soldOut && setExpandedBatch(expandedBatch === index ? null : index)}
                className={`w-full text-left p-6 rounded-lg shadow-md transition-all duration-300 flex items-center justify-between group focus-visible:outline-2 focus-visible:outline-[#5D2126] focus-visible:outline-offset-2 ${batch.soldOut ? 'cursor-default' : 'hover:shadow-lg cursor-pointer'
                  } ${batch.highlighted ? 'bg-linear-to-r from-[#5D2126] to-[#7D4E50] text-[#F9F4F5]' : 'bg-white'}`}
                whileHover={!batch.soldOut ? { x: 5 } : {}}
                aria-expanded={expandedBatch === index}
                aria-controls={`batch-${index}-content`}
                aria-label={`${batch.name} - ${batch.vacancies}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <p className={`text-base md:text-2xl font-bold whitespace-nowrap ${batch.highlighted ? 'text-[#F9F4F5]' : 'text-[#5D2126]'}`}>
                      {batch.name}
                    </p>
                    {batch.highlighted && (
                      <span className="px-3 py-1 bg-[#BC989A] text-[#5D2126] text-xs font-bold rounded-full">DESTAQUE</span>
                    )}
                    {batch.soldOut && (
                      <span className="px-3 py-1 bg-[#8C5E60] text-white text-xs font-bold rounded-full uppercase">ESGOTADO</span>
                    )}
                  </div>
                  {batch.subtitle && (
                    <p className={`text-sm font-semibold mb-2 ${batch.highlighted ? 'text-[#D4B5B7]' : 'text-[#8C5E60]'}`}>
                      {batch.subtitle}
                    </p>
                  )}
                  <div className="flex flex-col gap-1">
                    <p className={`text-sm font-semibold ${batch.highlighted ? 'text-[#D4B5B7]' : 'text-[#BC989A]'}`}>
                      {batch.vacancies}
                    </p>
                    {batch.deadline && (
                      <p className={`text-xs ${batch.highlighted ? 'text-[#BC989A]' : 'text-[#8C5E60]'} font-semibold`}>
                        Encerra em {batch.deadline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Seta: Só aparece se NÃO estiver esgotado */}
                {!batch.soldOut && (
                  <motion.div
                    animate={{ rotate: expandedBatch === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`w-6 h-6 ${batch.highlighted ? 'text-white' : 'text-[#5D2126]'}`}
                    />
                  </motion.div>
                )}
              </motion.button>

              {/* Categories List */}
              <AnimatePresence>
                {expandedBatch === index && (
                  <motion.div
                    id={`batch-${index}-content`}
                    className="overflow-hidden bg-white"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={categoriesVariants}
                    role="region"
                    aria-labelledby={`batch-${index}-header`}
                  >
                    <div className="p-6 space-y-4">
                      {batch.categories.map((cat, catIdx) => (
                        <motion.div
                          key={catIdx}
                          className="flex flex-nowrap items-center justify-between p-3 md:p-4 bg-[#F9F4F5] rounded-lg border-l-2 border-[#BC989A] gap-2"
                          variants={categoryItemVariants}
                          whileHover={{ x: 5, backgroundColor: '#ECD5D7' }}
                        >
                          <div className="flex items-center gap-2 md:gap-3 min-w-0">
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-[#BC989A] shrink-0" />
                            <span className="font-semibold text-[#593234] text-sm md:text-base truncate">{cat.category}</span>
                          </div>

                          <span className={`text-base md:text-xl font-bold whitespace-nowrap shrink-0 ${batch.soldOut ? 'text-[#8C5E60]' : 'text-[#5D2126]'}`}>
                            {cat.price}
                          </span>
                        </motion.div>
                      ))}

                      {/* CTA Button */}
                      {batch.soldOut ? (
                        <div className="w-full mt-4 py-3 px-4 bg-[#BC989A] text-[#F9F4F5] font-bold rounded-lg inline-block text-center cursor-not-allowed opacity-60" aria-disabled="true">
                          Esgotado
                        </div>
                      ) : batch.disabled ? (
                        <div className="w-full mt-4 py-3 px-4 bg-[#BC989A] text-[#F9F4F5] font-bold rounded-lg inline-block text-center cursor-not-allowed opacity-60" aria-disabled="true">
                          Em Breve
                        </div>
                      ) : (
                        <motion.a
                          href="https://www.even3.com.br/conecc-i-congresso-de-especialidades-clinicas-e-cirurgicas-674375/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full mt-4 py-3 px-4 bg-[#5D2126] text-[#F9F4F5] font-bold rounded-lg transition-all duration-300 hover:bg-[#7D4E50] focus-visible:outline-2 focus-visible:outline-[#BC989A] focus-visible:outline-offset-2 inline-block text-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`Inscrever-se no ${batch.name}`}
                        >
                          {batch.highlighted ? 'Garantir Minha Vaga' : 'Inscrever-se'}
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}