import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Event {
  time: string;
  title: string;
  speaker?: string;
}

interface Period {
  name: string;
  module: string;
  coordinator?: string;
  events: Event[];
}

interface ScheduleDay {
  date: string;
  day: string;
  events?: Event[];
  periods?: Period[];
}

const scheduleDays: ScheduleDay[] = [
  {
    date: '26/03',
    day: 'Quinta-feira',
    periods: [
      {
        name: 'Abertura',
        module: 'PALESTRAS MAGNAS',
        coordinator: '',
        events: [
          { time: '17h', title: 'Check-in' },
          { time: '18h às 18h40', title: 'Abertura e composição da mesa e convidados de honra' },
          { time: '18h40 às 19h30', title: 'Palestra Magna 1 - Reconhecimento precoce e tomada de decisão clínica: o que realmente salva vidas na prática médica', speaker: 'Dr. Eric Rulli - Médico na Prática' },
          { time: '19h40 às 20h30', title: 'Palestra Magna 2 - Além do CRM: Construindo a Carreira do Médico Jovem', speaker: 'Dr. Zeus Tristão' },
          { time: '20h30', title: 'Finalização' },
          { time: '21h', title: 'Coffee Break e Check-out' },
        ],
      },
    ],
  },
  {
    date: '27/03',
    day: 'Sexta-feira',
    periods: [
      {
        name: 'Manhã',
        module: 'MÓDULO ALTA PERFORMANCE',
        coordinator: 'Coordenador: Dr. Bruno Monte',
        events: [
          { time: '7h às 8h', title: 'Check-in' },
          { time: '8h às 8h50', title: 'Controle de dor em atletas de alta performance', speaker: 'Dr. Bruno Monte - Ortopedista' },
          { time: '8h50 às 9h40', title: 'Estilo de Vida e Alta Performance: Uma estratégia baseada em evidências', speaker: 'Dr. Brenno Andrade - Nutrólogo' },
          { time: '9h40 às 10h10', title: 'Coffee Break' },
          { time: '10h10 às 10h50', title: 'Uso de análogos de GLP1 em atletas de alta performance', speaker: 'Dr. Wallace Miranda - Endocrinologista' },
          { time: '10h50 às 11h40', title: 'A importância do teste cardiopulmonar no esporte', speaker: 'Dr. Eduardo Ayre - Médico do Esporte' },
          { time: '11h40 às 12h10', title: 'Mesa Redonda: Pacientes atletas de alto rendimento - como conduzir', speaker: 'Moderador: Dr. Bruno Monte' },
        ],
      },
      {
        name: 'Tarde',
        module: 'MÓDULO DE CARDIOLOGIA',
        coordinator: 'Coordenador: Dr. Francisco Junior',
        events: [
          { time: '14h às 14h50', title: 'Insuficiência Cardíaca Crônica: do diagnóstico precoce à terapia guiada por evidências na prática clínica', speaker: 'Palestrante Dr.' },
          { time: '14h50 às 15h40', title: 'Síndrome Coronariana Aguda: reconhecimento rápido e tomada de decisão nas primeiras horas', speaker: 'Palestrante:' },
          { time: '15h40 às 16h30', title: 'Inteligência Artificial na prática Médica', speaker: 'Jocerlano' },
          { time: '16h30 às 17h10', title: 'Mesa Redonda: Angioplastia versus Cirurgia de Revascularização Miocárdica: como escolher a melhor estratégia para cada paciente?' },
          { time: '17h10 às 17h50', title: 'Coffee Break' },
        ],
      },
      {
        name: 'Noite',
        module: 'MÓDULO DE EMERGÊNCIAS',
        coordinator: 'Coordenador: Dr. Nagele Lima',
        events: [
          { time: '18h às 18h40', title: 'Abordagem integrada do neurocrítico na sala de emergência e UTI', speaker: 'Dr. Nagele Lima' },
          { time: '18h40 às 19h20', title: 'Doppler Transcraniano na Emergência: o que muda a conduta em tempo real', speaker: 'Dr. Eduardo dos Santos Sousa' },
          { time: '19h20 às 20h', title: 'Emergências Neurocirúrgicas: quando operar, quando observar e quando monitorizar', speaker: 'Dr. Romilto Pacheco' },
          { time: '20h às 20h30', title: 'Mesa Redonda - Decisões Difíceis no Neurocrítico: quem decide, quando decidir e com quais dados', speaker: 'Moderador: Dr. Nagele Lima | Participantes: Dr. Nagele Lima, Dr. Romilto da Costa Pacheco, Dr. Eduardo dos Santos Sousa' },
          { time: '20h40', title: 'Check-out' },
        ],
      },
    ],
  },
  {
    date: '28/03',
    day: 'Sábado',
    periods: [
      {
        name: 'Manhã',
        module: 'MÓDULO DE ESTÉTICA',
        coordinator: 'Coordenadores: Dra. Ana Zanatta e Dr. Edson Neto',
        events: [
          { time: '7h', title: 'Check-in' },
          { time: '8h às 8h40', title: 'Dermatologia - A nova estética: beleza como expressão de saúde integral', speaker: 'Dra. Ana Zanatta' },
          { time: '8h50 às 9h30', title: 'Tecnologia biohacking e estética regenerativa', speaker: 'Dra. Marcela Mendes' },
          { time: '9h40 às 10h10', title: 'Coffee Break' },
          { time: '10h10 às 10h50', title: 'Plástica - Cirurgia Plástica Funcional - Além da Estética', speaker: 'Dr. Edson Neto' },
          { time: '11h às 11h40', title: 'Inovações em Cirurgia Plástica: O que esperar nos próximos 10 anos?', speaker: 'Dra. Juliane Brígida' },
          { time: '11h50 às 12h20', title: 'Mesa Redonda - Face Lifting Cirúrgico X Bioestimuladores: Indicações Precisas, Timing Ideal e Resultados Sustentáveis', speaker: 'Dra. Ana Zanatta, Dra. Juliane Brígida, Dr. Edson Neto, Dra. Marcela Mendes' },
        ],
      },
      {
        name: 'Tarde',
        module: 'MÓDULO DE PSIQUIATRIA',
        coordinator: 'Coordenador: Dr. Leonardo Luz',
        events: [
          { time: '14h às 14h20', title: 'TDAH na Infância e Adolescência: diagnóstico, impacto funcional e manejo clínico', speaker: 'Dr. Luan Arno - Psiquiatra' },
          { time: '14h20 às 14h40', title: 'TDAH no Adulto: desafios diagnósticos, comorbidades e estratégias terapêuticas', speaker: 'Dr. Leonardo Luz - Psiquiatra' },
          { time: '14h40 às 15h', title: 'Depressão no Idoso: apresentação clínica, fatores de risco e abordagem integral', speaker: 'Dra. Déborah Carvalho - Geriatra' },
          { time: '15h às 15h20', title: 'Doenças Neurológicas e Alterações da Atenção: quando pensar além do psiquiátrico', speaker: 'Dr. Kelson James - Neurologista' },
          { time: '15h20 às 15h40', title: 'Declínio Cognitivo Leve e Demências: diferenciação clínica e abordagem atual', speaker: 'Dra. Ingrid - Psiquiatra' },
          { time: '15h40 às 16h', title: 'Discussão Final: integração clínica entre atenção, humor e cognição' },
          { time: '16h às 16h50', title: 'Coffee Break' },
          { time: '17h às 18h', title: 'Palestra do Sindicado de Médicos do Piauí- Palestrante: Dra. Lúcia Santos' },
          { time: '16h às 20h', title: 'Momento MEDCOF' },
          { time: '20h', title: 'Check-out' },
        ],
      },
    ],
  },
  {
    date: '29/03',
    day: 'Domingo',
    periods: [
      {
        name: 'Manhã',
        module: 'MÓDULO DE GINECOLOGIA E OBSTETRÍCIA',
        coordinator: 'Coordenador: Dr. Ricardo Keyson e Dra. Luciana Monteiro',
        events: [
          { time: '7h às 8h', title: 'Check-in' },
          { time: '8h às 8h40', title: 'Sangramento transvaginal anormal: abordagem clínica e cirúrgica na urgência', speaker: 'Dra. Luciana Monteiro' },
          { time: '8h50 às 9h30', title: 'Endometriose: abordagem clínica e cirúrgica, diagnóstico diferencial e conduta', speaker: 'Dr. Marizon Armstrong' },
          { time: '9h40 às 10h20', title: 'Mesa Redonda - Cesárea fora do script: intercorrências inesperadas e tomada de decisão', speaker: 'Participantes: Dr. Marizon, Dr. José Arimatea, Dra. Luciana Monteiro e Dr. Ricardo Keyson (mediador)' },
          { time: '10h30 às 11h', title: 'Coffee Break' },
          { time: '11h às 11h40', title: 'Mortalidade Materna: como reduzi-la através da sofisticação do simples', speaker: 'Dr. Marcelo Zugaib' },
          { time: '11h50 às 13h', title: 'Finalização do congresso e Premiações' },
          { time: '13h', title: 'Check-out' },
        ],
      },
    ],
  },
];

export default function Schedule() {
  const [expandedDay, setExpandedDay] = useState(-1);


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

  const dayVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const eventsVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
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

  const eventItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="programacao" className="py-24 bg-[#F9F4F5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Programação do Congresso</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
          <p className="text-lg text-[#593234]">
            Confira a programação completa do I CONECC, com palestras,<br /> módulos temáticos e momentos de networking.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-4">
          {scheduleDays.map((scheduleDay, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-[#BC989A] pl-6 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={dayVariants}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-10px] top-6 w-4 h-4 bg-[#BC989A] rounded-full border-4 border-white shadow-md"></div>

              {/* Day Header */}
              <motion.button
                onClick={(e) => {
                  const isOpening = expandedDay !== index;
                  setExpandedDay(isOpening ? index : -1);

                  if (isOpening) {
                    const element = e.currentTarget;
                    setTimeout(() => {
                      const headerOffset = 180;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }, 400);
                  }
                }}
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between group border border-[#E5D5D6]"
                whileHover={{ x: 5, borderColor: '#BC989A' }}
              >
                <div>
                  <p className="text-2xl font-bold text-[#5D2126]">{scheduleDay.date}</p>
                  <p className="text-[#BC989A] font-semibold">{scheduleDay.day}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedDay === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#F9F4F5] p-2 rounded-full group-hover:bg-[#BC989A] transition-colors"
                >
                  <ChevronDown className="w-6 h-6 text-[#5D2126] group-hover:text-white transition-colors" />
                </motion.div>
              </motion.button>

              {/* Events List */}
              <AnimatePresence>
                {expandedDay === index && (
                  <motion.div
                    className="mt-4 space-y-3 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={eventsVariants}
                  >
                    {/* Check if has periods (like Friday) */}
                    {scheduleDay.periods ? (
                      scheduleDay.periods.map((period, periodIdx) => (
                        <div key={periodIdx} className="ml-4">
                          {/* Period Header */}
                          <div className="bg-gradient-to-r from-[#5D2126] to-[#BC989A] text-white px-4 py-3 rounded-lg mb-3 shadow-md">
                            {period.name && (
                              <p className="font-bold text-lg">{period.name}</p>
                            )}
                            <p className={`font-semibold ${period.name ? 'text-sm opacity-90' : 'text-lg'}`}>{period.module}</p>
                            {period.coordinator && (
                              <p className="text-xs opacity-80 mt-1">{period.coordinator}</p>
                            )}
                          </div>

                          {/* Period Events */}
                          <div className="space-y-3">
                            {period.events.map((event, eventIdx) => (
                              <motion.div
                                key={eventIdx}
                                className="p-4 bg-white rounded-lg border-l-4 border-[#BC989A] shadow-sm hover:shadow-md transition-shadow"
                                variants={eventItemVariants}
                                whileHover={{ x: 5, borderColor: '#5D2126' }}
                              >
                                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                                  <div className="shrink-0 md:min-w-[160px]">
                                    <div className="bg-[#F9F4F5] px-3 py-1 rounded-lg text-center md:text-center w-fit md:w-full">
                                      <p className="font-bold text-[#5D2126] text-sm md:text-base">{event.time}</p>
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[#593234] font-medium leading-relaxed uppercase text-sm md:text-base break-words">{event.title}</p>
                                    {event.speaker && (
                                      <div className="flex items-start gap-2 mt-2">
                                        <div className="w-2 h-2 rounded-full bg-[#BC989A] shrink-0 mt-1.5"></div>
                                        <p className="text-[#BC989A] text-xs md:text-sm font-medium break-words">{event.speaker}</p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      /* Regular events (other days) */
                      scheduleDay.events?.map((event, eventIdx) => (
                        <motion.div
                          key={eventIdx}
                          className="p-4 bg-white rounded-lg border-l-4 border-[#BC989A] ml-4 shadow-sm hover:shadow-md transition-shadow"
                          variants={eventItemVariants}
                          whileHover={{ x: 5, borderColor: '#5D2126' }}
                        >
                          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                            <div className="shrink-0 md:min-w-[160px]">
                              <div className="bg-[#F9F4F5] px-3 py-1 rounded-lg text-center md:text-center w-fit md:w-full">
                                <p className="font-bold text-[#5D2126] text-sm md:text-base">{event.time}</p>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[#593234] font-medium leading-relaxed uppercase text-sm md:text-base break-words">{event.title}</p>
                              {event.speaker && (
                                <div className="flex items-start gap-2 mt-2">
                                  <div className="w-2 h-2 rounded-full bg-[#BC989A] shrink-0 mt-1.5"></div>
                                  <p className="text-[#BC989A] text-xs md:text-sm font-medium break-words">{event.speaker}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
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