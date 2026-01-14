import { motion } from 'framer-motion';

const speakers = [
  // Palestrantes Principais (Destaques)
  {
    name: 'Eric Rulli',
    title: 'Médico e Consultor Empresarial',
    bio: 'Formado em Direito (USP) e Medicina (UNICAMP). Presidente da Comissão Nacional do Médico Jovem (AMB) e Conselheiro Fiscal do AgSUS. Atuou como concursado pelo TJ-SP por 12 anos. Criador do Método Médico na Prática.',
    highlight: true,
    image: 'https://i.ibb.co/1G2vnBvf/DIA-02-0008-MEDICO-NA-PRATICA-16.jpg'
  },
  {
    name: 'Dr. Zeus Tristão',
    title: 'Cirurgião Oncológico - Criador do Médico na Prática',
    bio: 'Formado pela UFMS com residência em Cirurgia Oncológica. Pós-graduado em cirurgia minimamente invasiva (Inst. Jacques Perissat). Chefe da Residência em Cirurgia Oncológica do HCan-CG (2014-2019).',
    highlight: true,
    image: 'https://i.ibb.co/ym0Xy1F4/Whats-App-Image-2026-01-14-at-12-17-18-AM.jpg'
  },
  // Demais Palestrantes
  {
    name: 'Dr. Marcelo Zugaib',
    title: 'Prof. Titular de Obstetrícia e Ginecologia - FMUSP',
    bio: 'Graduado pela UNIFESP com fellowship na UCLA (EUA). Atua em Medicina Materno-Fetal, com pesquisas em fisiologia fetal, prevenção do parto prematuro e hipertensão na gestação. Possui mais de 690 artigos publicados e cerca de 30 livros.',
    highlight: false,
    image: 'https://i.ibb.co/zHsrpdfF/Whats-App-Image-2026-01-14-at-12-22-56-AM.jpg'
  },
  {
    name: 'Dra. Luciana Monteiro',
    title: 'Ginecologista e Obstetra',
    bio: 'Residência Médica pela Universidade Federal do Ceará (UFC). Atuou como médica do HU-UFPI (EBSERH) e atualmente é plantonista na Clínica e Maternidade Santa Fé.',
    highlight: false,
    image: 'https://i.ibb.co/zhLhn9hP/Whats-App-Image-2026-01-14-at-12-23-31-AM.jpg'
  },
  {
    name: 'Dr. José Arimatéa Jr.',
    title: 'Chefe da Clínica Obstétrica da UFPI',
    bio: 'Pós-Doutorado em Obstetrícia pela USP e Doutorado pela UNIFESP. Membro titular do Colégio Brasileiro de Cirurgiões e da Academia de Medicina do Piauí.',
    highlight: false,
    image: 'https://i.ibb.co/zV1bvpHV/Whats-App-Image-2026-01-14-at-12-24-31-AM.jpg'
  },
  {
    name: 'Dr. Ricardo Keyson',
    title: 'Mastologista e Ginecologista',
    bio: 'Médico perito do CIASPI e da Fundação Municipal de Saúde de Teresina. Possui ampla experiência em mastologia e pré-natal de alto risco. Membro da Sociedade Brasileira de Mastologia.',
    highlight: false,
    image: 'https://i.ibb.co/1YFP62Ym/Whats-App-Image-2026-01-14-at-12-25-00-AM.jpg'
  },
  {
    name: 'Dr. Marizon Armstrong Jr.',
    title: 'Cirurgião Ginecológico',
    bio: 'Mestre em Saúde da Mulher (UFPI). Coordenador de Cirurgia de Endometriose (Hapvida/Humana) e membro titular da Sociedade Brasileira de Cirurgia Minimamente Invasiva e Robótica.',
    highlight: false,
    image: 'https://i.ibb.co/N2SCBjHt/Whats-App-Image-2026-01-14-at-9-55-01-AM.jpg'
  },
];

export default function Speakers() {
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const featuredVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Separa os destaques dos demais
  const featuredSpeakers = speakers.filter((s) => s.highlight);
  const otherSpeakers = speakers.filter((s) => !s.highlight);

  return (
    <section id="palestrantes" className="relative py-24 overflow-hidden bg-[#F9F4F5]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: 'url(/images/speakers_section.png)',
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#BC989A]/10 to-[#F9F4F5]"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Palestrantes</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
          <p className="text-lg text-[#593234]">
            Conheça os renomados profissionais que estarão no CONECC 2026, compartilhando experiência e perspectivas que inspiram o futuro da medicina.
          </p>
        </motion.div>

        {/* Featured Speakers (Destaques - Grid Duplo) */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={featuredVariants}
        >
          {featuredSpeakers.map((featured, index) => (
            <motion.div
              key={index}
              variants={cardVariants} // Reusando variants simples para entrada
              className="p-8 bg-white rounded-2xl shadow-xl border-t-8 border-[#5D2126] flex flex-col md:flex-row items-center md:items-start gap-6"
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(93, 33, 38, 0.25)' }}
            >
              {/* Imagem do Destaque */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-[#F9F4F5]">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    width="160"
                    height="160"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Texto do Destaque */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block mb-3 px-3 py-1 bg-[#5D2126] text-[#F9F4F5] text-xs font-bold tracking-wider rounded-full uppercase">
                  Palestrante Principal
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#5D2126] mb-1">{featured.name}</h3>
                <p className="text-[#BC989A] font-bold text-sm mb-3">{featured.title}</p>
                <p className="text-[#593234] leading-relaxed text-base opacity-90">{featured.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid de Outros Palestrantes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainerVariants}
        >
          {otherSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="p-6 flex flex-col items-center flex-grow">
                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-md border-2 border-[#BC989A]">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    width="128"
                    height="128"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#5D2126] text-center mb-2">{speaker.name}</h4>
                <p className="text-[#BC989A] font-semibold text-xs text-center uppercase tracking-wide mb-4 min-h-[2.5rem] flex items-center justify-center">
                  {speaker.title}
                </p>
                <p className="text-[#593234] text-sm text-center leading-relaxed opacity-80">
                  {speaker.bio}
                </p>
              </div>
              <div className="h-1.5 bg-[#BC989A]/30 w-full mt-auto"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}