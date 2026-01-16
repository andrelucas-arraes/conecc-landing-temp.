import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Trophy, Baby, Heart, Sparkles, Syringe, Brain, Ambulance } from 'lucide-react';

// Palestrantes Principais (Destaques)
const featuredSpeakers = [
  {
    name: 'Dr. Eric Rulli - Médico na Prática',
    title: 'Cirurgião Oncológico - Criador do Médico na Prática',
    bio: 'Formado pela UFMS com residência em Cirurgia Oncológica. Pós-graduado em cirurgia minimamente invasiva (Inst. Jacques Perissat). Chefe da Residência em Cirurgia Oncológica do HCan-CG (2014-2019).',
    image: 'https://i.ibb.co/1G2vnBvf/DIA-02-0008-MEDICO-NA-PRATICA-16.jpg'
  },
  {
    name: 'Dr. Zeus Tristão',
    title: 'Médico e Consultor Empresarial',
    bio: 'Formado em Direito (USP) e Medicina (UNICAMP). Presidente da Comissão Nacional do Médico Jovem (AMB) e Conselheiro Fiscal do AgSUS. Atuou como concursado pelo TJ-SP por 12 anos. Criador do Método Médico na Prática.',
    image: 'https://i.ibb.co/ym0Xy1F4/Whats-App-Image-2026-01-14-at-12-17-18-AM.jpg'
  },
];

// Módulos com seus respectivos palestrantes
const modules = [
  {
    name: 'Módulo de Alta Performance',
    icon: Trophy,
    color: '#5D2126',
    speakers: [
      {
        name: 'Dr. Bruno Monte',
        title: 'Ortopedista e Traumatologista',
        bio: 'Especialista em Oncologia Ortopédica (A.C. Camargo). Mestre em Saúde da Família. Pós-graduado em Medicina do Esporte e Dor. Coordenador Adjunto de Medicina da Afya Uninovafapi.',
        image: 'https://i.ibb.co/G3b0s3PH/IMG-0757.jpg'
      },
      {
        name: 'Dr. Brenno Andrade',
        title: 'Nefrologista e Nutrólogo',
        bio: 'Residência em Nefrologia (UNIFESP) e Clínica Médica (UFPI). Pós-graduado em Nutrologia (ABRAN). Médico do HU-UFPI e Preceptor de residência e internato. Triatleta e Influenciador Digital.',
        image: 'https://i.ibb.co/tpYBSpfn/Whats-App-Image-2026-01-14-at-12-13-15-PM.jpg'
      },
      {
        name: 'Dr. Wallace Miranda',
        title: 'Endocrinologista e Metabologista',
        bio: 'Doutorado e Residência pela USP-RP. Professor da UFPI e Supervisor da residência de Endocrinologia do HU-UFPI. Presidente da SBEM-PI (2023-2024).',
        image: 'https://i.ibb.co/BVSvcfBh/Whats-App-Image-2026-01-14-at-12-13-15-PM-2.jpg'
      },
      {
        name: 'Dr. Eduardo Ayremoraes',
        title: 'Cardiologista e Médico do Esporte',
        bio: 'Titulado pela SBC. Pós-graduado em Medicina do Exercício e do Esporte e em Terapia Intensiva. Professor de Graduação da Medicina na Afya UNINOVAFAPI.',
        image: 'https://i.ibb.co/nMpmTtvc/Whats-App-Image-2026-01-14-at-12-16-17-PM.jpg'
      },
    ]
  },
  {
    name: 'Módulo GO',
    icon: Baby,
    color: '#8B5E3C',
    speakers: [
      {
        name: 'Dra. Luciana Monteiro',
        title: 'Ginecologista e Obstetra',
        bio: 'Residência Médica pela Universidade Federal do Ceará (UFC). Atuou como médica do HU-UFPI (EBSERH) e atualmente é plantonista na Clínica e Maternidade Santa Fé.',
        image: 'https://i.ibb.co/zhLhn9hP/Whats-App-Image-2026-01-14-at-12-23-31-AM.jpg'
      },
      {
        name: 'Dr. Marcelo Zugaib',
        title: 'Prof. Titular de Obstetrícia e Ginecologia - FMUSP',
        bio: 'Graduado pela UNIFESP com fellowship na UCLA (EUA). Atua em Medicina Materno-Fetal, com pesquisas em fisiologia fetal, prevenção do parto prematuro e hipertensão na gestação. Possui mais de 690 artigos publicados e cerca de 30 livros.',
        image: 'https://i.ibb.co/zHsrpdfF/Whats-App-Image-2026-01-14-at-12-22-56-AM.jpg'
      },
      {
        name: 'Dr. Ricardo Keyson',
        title: 'Mastologista e Ginecologista',
        bio: 'Médico perito do CIASPI e da Fundação Municipal de Saúde de Teresina. Possui ampla experiência em mastologia e pré-natal de alto risco. Membro da Sociedade Brasileira de Mastologia.',
        image: 'https://i.ibb.co/1YFP62Ym/Whats-App-Image-2026-01-14-at-12-25-00-AM.jpg'
      },
      {
        name: 'Dr. Marizon Armstrong Jr.',
        title: 'Cirurgião Ginecológico',
        bio: 'Mestre em Saúde da Mulher (UFPI). Coordenador de Cirurgia de Endometriose (Hapvida/Humana) e membro titular da Sociedade Brasileira de Cirurgia Minimamente Invasiva e Robótica.',
        image: 'https://i.ibb.co/N2SCBjHt/Whats-App-Image-2026-01-14-at-9-55-01-AM.jpg'
      },
      {
        name: 'Dr. José Arimatéa Jr.',
        title: 'Chefe da Clínica Obstétrica da UFPI',
        bio: 'Pós-Doutorado em Obstetrícia pela USP e Doutorado pela UNIFESP. Membro titular do Colégio Brasileiro de Cirurgiões e da Academia de Medicina do Piauí.',
        image: 'https://i.ibb.co/zV1bvpHV/Whats-App-Image-2026-01-14-at-12-24-31-AM.jpg'
      },
    ]
  },
  {
    name: 'Módulo Cardiologia',
    icon: Heart,
    color: '#C41E3A',
    speakers: [
      {
        name: 'Dr. Francisco Junior',
        title: 'Cardiologista',
        bio: 'Residência em Clínica Médica e Cardiologia pelo HU- UFPI, Pós-Graduação lato sensu em Cardio-Oncologia, Professor de Medicina da UniFacid, Coordenador do Pronto Atendimento do HSM, CEO da empresa de Tecnologia na Saúde e Educação.',
        image: 'https://i.ibb.co/j9Nt96SV/Whats-App-Image-2026-01-16-at-5-32-28-PM.jpg'
      },
      {
        name: 'Dra. Vitória Ximendes',
        title: 'Cardiologista',
        bio: 'Residência Médica em Cardiologia pelo HU-UFBA, Especialista em Cardiologia e Ecocardiografia pela SBC/ DIC, Cardiologista do HUT, Cardiologista da Linha de Cuidado do Infarto Agudo do Miocárdio do Piauí- MEDSAFE',
        image: 'https://i.ibb.co/C3D3vMSL/Whats-App-Image-2026-01-16-at-5-37-34-PM.jpg'
      },
      {
        name: 'Dr. Thiago Nunes',
        title: 'Cardiologista e Ecocardiografista',
        bio: 'Doutor em Cardiologia pela USP, Cardiologista e Ecocardiografista pelo InCor - FMUSP, Preceptor da Residência de Cardiologia do HU UFPI, Professor da Unifacid',
        image: 'https://i.ibb.co/fGStCC1z/Whats-App-Image-2026-01-16-at-5-27-56-PM.jpg'
      },
      {
        name: 'NOME NOME',
        title: 'NOME NOME',
        bio: 'NOME NOME',
        image: ''
      },
    ]
  },
  {
    name: 'Módulo Dermatologia',
    icon: Sparkles,
    color: '#D4A574',
    speakers: [
      {
        name: 'Dra. Ana Zanatta',
        title: 'Dermatologista e Tricologista',
        bio: 'Graduada pela UFPI com residência na UFC. Fellowship em Cosmiatria e Procedimentos Invasivos. Especialista em Tricologia e Fellow pelo Hospital Saint-Louis (Paris).',
        image: 'https://i.ibb.co/tT455rB3/Whats-App-Image-2026-01-14-at-9-08-16-PM.jpg'
      },
      {
        name: 'Dra. Marcela Mendes',
        title: 'Dermatologista',
        bio: 'Membro titular da SBD e SBCD. Residência pelo HU-UFPI e Fellowship em Cosmiatria (RJ). Atua como Perita médica legista da Polícia Civil do Piauí.',
        image: 'https://i.ibb.co/RTykX9MV/Whats-App-Image-2026-01-15-at-10-42-45-PM.jpg'
      },
    ]
  },
  {
    name: 'Módulo Cirurgia Plástica',
    icon: Syringe,
    color: '#9B59B6',
    speakers: [
      {
        name: 'Dr. Edson Neto',
        title: 'Cirurgião Plástico',
        bio: 'Graduado pela UESPI com 14 anos de atuação exclusiva em cirurgia plástica. Especialista em contorno corporal e mama, com mais de 5 mil vidas transformadas e foco na autoestima feminina.',
        image: 'https://i.ibb.co/HpFMY3W2/Whats-App-Image-2026-01-14-at-10-30-57-PM.jpg'
      },
      {
        name: 'Dra. Juliane Brígida',
        title: 'Cirurgiã Plástica',
        bio: 'Graduada pela UFPI. Residência em Cirurgia Geral pelo Hospital da Restauração (PE) e em Cirurgia Plástica pelo Hospital Universitário Professor Edgard Santos (BA).',
        image: 'https://i.ibb.co/BV1My89j/JAD-169.jpg'
      },
    ]
  },
  {
    name: 'Módulo Psiquiatria',
    icon: Brain,
    color: '#3498DB',
    speakers: [
      {
        name: 'Dr. Leonardo Sérvio Luz',
        title: 'Psiquiatra e Coord. Medicina UFPI',
        bio: 'Graduado pela UFPI, residência pela PUC/SP e Doutorado em Bioética (São Camilo). Professor da UFPI e Unifacid.',
        image: 'https://i.ibb.co/kgQrVZJK/Whats-App-Image-2026-01-14-at-9-05-13-PM.jpg'
      },
      {
        name: 'Dr. Luan Arnon de Melo Cunha',
        title: 'Psiquiatra Infantil e Professor',
        bio: 'Graduado pela UFPI, com residência em Psiquiatria Geral e da Infância/Adolescência pela USP. Professor da Uninovafapi, Preceptor na AFYA e Perito da SESAPI.',
        image: 'https://i.ibb.co/r2JxtVBR/Whats-App-Image-2026-01-14-at-9-04-54-PM-1.jpg'
      },
      {
        name: 'Dra. Deborah Carvalho Correia Bastos',
        title: 'Geriatra e Profª da UFPI',
        bio: 'Graduada pela UESPI com residência e mestrado pela UNIFESP. Especialista pela SBGG. Professora e Coordenadora de Geriatria da UFPI e Preceptora do HU-UFPI.',
        image: 'https://i.ibb.co/RpCbNt8N/Whats-App-Image-2026-01-14-at-9-04-53-PM.jpg'
      },
      {
        name: 'Dr. Kelson James Almeida',
        title: 'Neurologista e Prof. da UFPI',
        bio: 'Graduado pela UFPI, com residência e Doutorado em Neurologia pela USP (HCFMUSP). Professor, Chefe de Departamento e orientador de pós-graduação na UFPI.',
        image: 'https://i.ibb.co/fzXTPQtg/Whats-App-Image-2026-01-14-at-9-04-54-PM.jpg'
      },
      {
        name: 'Dra. Ingrid Carvalho',
        title: 'Psiquiatra e Profª da UFPI',
        bio: 'Graduada pela UFPI com residência em Psiquiatria pela USP-RP. Professora e Coordenadora do Programa de Residência de Psiquiatria da UFPI.',
        image: 'https://i.ibb.co/sJzZXSKG/Whats-App-Image-2026-01-14-at-9-04-53-PM-1.jpg'
      },
    ]
  },
  {
    name: 'Módulo de Emergência',
    icon: Ambulance,
    color: '#E74C3C',
    speakers: [
      {
        name: 'Dr. Nagele Lima',
        title: 'Emergencista e Intensivista',
        bio: 'Especialista em Emergência (Abramede), Cardiologia e Medicina Intensiva. Neurointensivista (Sírio Libanês) e coord. de UTIs em Teresina e do Hospital Monte Castelo.',
        image: 'https://i.ibb.co/LXvTLN9b/Whats-App-Image-2026-01-14-at-9-52-36-PM.jpg'
      },
      {
        name: 'Dr. Eduardo dos Santos Sousa',
        title: 'Neurologista',
        bio: 'Graduado pela UFMA, residência pela Santa Casa de Misericórdia de SP, fellowship em Neurologia Vascular, Neurointensivismo e Doppler Transcraniano pela UNIFESP.',
        image: 'https://i.ibb.co/pvvhw8rz/Whats-App-Image-2026-01-14-at-9-51-48-PM.jpg'
      },
      {
        name: 'Dr. Romilto Pacheco',
        title: 'Neurocirurgião e Neurorradiologista',
        bio: 'Graduado pela UFPI, com residência em Neurocirurgia e Neurorradiologia pela USP-RP. Mestre em Ciências das Imagens pela USP-RP. Neurointervencionista no HGV e Neurocirurgião no HUT.',
        image: 'https://i.ibb.co/5g6LYMyW/Whats-App-Image-2026-01-14-at-9-53-15-PM.jpg'
      },
    ]
  },
];

export default function Speakers() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const expandedSpeakersRef = useRef<HTMLDivElement>(null);

  // Scroll para a seção de palestrantes quando um módulo é expandido
  useEffect(() => {
    if (expandedModule && expandedSpeakersRef.current) {
      // Pequeno delay para garantir que a animação de expansão começou
      setTimeout(() => {
        expandedSpeakersRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [expandedModule]);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const featuredVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const moduleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const toggleModule = (moduleName: string) => {
    setExpandedModule(expandedModule === moduleName ? null : moduleName);
  };

  return (
    <section id="palestrantes" className="relative py-12 md:py-24 overflow-hidden bg-[#F9F4F5]">
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
          className="max-w-3xl mx-auto mb-8 md:mb-16 text-center px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5D2126] mb-4 md:mb-6">Palestrantes</h2>
          <div className="w-12 md:w-16 h-1 bg-[#BC989A] mb-4 md:mb-8 mx-auto"></div>
          <p className="text-sm md:text-lg text-[#593234] px-2">
            Conheça os renomados profissionais que estarão no CONECC 2026, compartilhando experiência e perspectivas que inspiram o futuro da medicina.
          </p>
        </motion.div>

        {/* Featured Speakers (Destaques - Grid Duplo) */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={featuredVariants}
        >
          {featuredSpeakers.map((featured, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-4 md:p-8 bg-white rounded-xl md:rounded-2xl shadow-xl border-t-4 md:border-t-8 border-[#5D2126] flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6"
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(93, 33, 38, 0.25)' }}
            >
              {/* Imagem do Destaque */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-[#F9F4F5]">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    width="112"
                    height="112"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Texto do Destaque */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block mb-2 md:mb-3 px-2 md:px-3 py-1 bg-[#5D2126] text-[#F9F4F5] text-[10px] md:text-xs font-bold tracking-wider rounded-full uppercase">
                  Palestrante Principal
                </div>
                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#5D2126] mb-1">{featured.name}</h3>
                <p className="text-[#BC989A] font-bold text-xs md:text-sm mb-2 md:mb-3">{featured.title}</p>
                <p className="text-[#593234] leading-relaxed text-xs md:text-base opacity-90">{featured.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Módulos Section */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5D2126] text-center mb-3 md:mb-4">Módulos do Congresso</h3>
          <p className="text-center text-sm md:text-base text-[#593234] mb-6 md:mb-12 max-w-2xl mx-auto px-2">
            Explore os diferentes módulos do CONECC e conheça os especialistas de cada área
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-12">
          {modules.map((module, moduleIndex) => (
            <motion.div
              key={moduleIndex}
              variants={moduleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="cursor-pointer w-[calc(50%-6px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
              onClick={() => toggleModule(module.name)}
            >
              <div
                className={`relative p-3 md:p-6 rounded-xl md:rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${expandedModule === module.name ? 'ring-2 md:ring-4 ring-offset-1 md:ring-offset-2' : ''
                  }`}
                style={{
                  background: `linear-gradient(135deg, ${module.color}15 0%, ${module.color}05 100%)`,
                  borderTop: `3px solid ${module.color}`,
                  '--tw-ring-color': module.color,
                } as React.CSSProperties}
              >
                {/* Module Icon & Title */}
                <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
                  <module.icon className="w-6 h-6 md:w-10 md:h-10 flex-shrink-0" style={{ color: '#5d2126' }} />
                  <div>
                    <h4 className="text-xs md:text-lg font-bold text-[#5D2126] leading-tight">{module.name}</h4>
                  </div>
                </div>

                {/* Speaker Avatars Preview */}
                <div className="flex -space-x-2 md:-space-x-3 flex-wrap">
                  {module.speakers.map((speaker, idx) => (
                    <div
                      key={idx}
                      className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                    >
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/speaker-default.jpg';
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Expand Indicator */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ rotate: expandedModule === module.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#5D2126] opacity-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Module Speakers */}
        {expandedModule && (
          <motion.div
            ref={expandedSpeakersRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 scroll-mt-24"
          >
            {modules
              .filter((m) => m.name === expandedModule)
              .map((module) => (
                <div key={module.name} className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-8">
                  {/* Module Header */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8 pb-4 md:pb-6 border-b border-gray-200">
                    <module.icon className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0" style={{ color: '#5d2126' }} />
                    <div>
                      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#5D2126]">{module.name}</h3>
                      <p className="text-xs md:text-base text-[#593234]">Palestrantes deste módulo</p>
                    </div>
                  </div>

                  {/* Speakers Grid */}
                  <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                    {module.speakers.map((speaker, speakerIndex) => (
                      <motion.div
                        key={speakerIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: speakerIndex * 0.1 }}
                        className="bg-[#F9F4F5] rounded-lg md:rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-[calc(50%-6px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div
                            className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4 border-2 md:border-4"
                            style={{ borderColor: module.color }}
                          >
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/images/speaker-default.jpg';
                              }}
                            />
                          </div>
                          <h4 className="text-sm md:text-lg font-bold text-[#5D2126] mb-1 leading-tight">{speaker.name}</h4>
                          <p
                            className="text-[10px] md:text-xs font-semibold uppercase tracking-wide mb-2 md:mb-3"
                            style={{ color: module.color }}
                          >
                            {speaker.title}
                          </p>
                          <p className="text-[10px] md:text-sm text-[#593234] leading-relaxed opacity-80">
                            {speaker.bio}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}