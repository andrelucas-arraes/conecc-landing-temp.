import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

// Dados da Diretoria Médica (4 médicos)
const placeholderImage = 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg';

const medicalDirectors = [
    {
        name: 'Dr. Paulo Roberto Silva',
        role: 'Diretor Presidente',
        bio: 'Cardiologista com mais de 25 anos de experiência. Formado pela USP com especialização no InCor. Professor titular de Cardiologia e membro da Academia Nacional de Medicina. Pioneiro em técnicas de intervenção minimamente invasiva no Nordeste.',
        image: placeholderImage
    },
    {
        name: 'Dra. Maria Helena Costa',
        role: 'Diretora Científica',
        bio: 'Oncologista clínica com doutorado pela UNICAMP. Coordenadora do programa de pesquisa em imunoterapia do Hospital São Marcos. Autora de mais de 100 artigos científicos e consultora da OMS para protocolos oncológicos.',
        image: placeholderImage
    },
    {
        name: 'Dr. Antonio Carlos Neto',
        role: 'Diretor Administrativo',
        bio: 'Cirurgião geral com MBA em Gestão em Saúde pela FGV. Ex-diretor técnico do Hospital Getúlio Vargas e atual presidente da Associação Médica do Piauí. Especialista em gestão hospitalar e qualidade em serviços de saúde.',
        image: placeholderImage
    },
    {
        name: 'Dra. Luciana Fernandes',
        role: 'Diretora de Ensino',
        bio: 'Pediatra e professora da UFPI há 18 anos. Mestre e Doutora em Medicina pela FMUSP. Coordenadora do programa de residência médica e responsável pela formação de mais de 500 médicos residentes na região.',
        image: placeholderImage
    }
];

export default function MedicalBoard() {
    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section id="diretoria" className="relative py-10 md:py-24 overflow-hidden bg-[#5D2126]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#BC989A]/20 blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#BC989A]/15 blur-3xl"></div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto mb-6 md:mb-16 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <div className="inline-flex items-center justify-center gap-3 mb-2 md:mb-4">
                        <Stethoscope className="w-6 h-6 md:w-10 md:h-10 text-[#BC989A]" />
                    </div>
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-6">
                        Diretoria Médica
                    </h2>
                    <div className="w-12 md:w-16 h-1 bg-[#BC989A] mb-3 md:mb-6 mx-auto"></div>
                    <p className="text-xs md:text-lg text-[#F9F4F5]/80 px-2 md:px-0">
                        Profissionais de excelência que lideram nossa instituição com dedicação e compromisso com a saúde.
                    </p>
                </motion.div>

                {/* Directors Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {medicalDirectors.map((director, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group"
                        >
                            <div className="relative bg-[#F9F4F5] rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
                                {/* Top Accent Bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BC989A] via-[#5D2126] to-[#BC989A]"></div>

                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <div className="aspect-[4/3] md:aspect-square">
                                        <img
                                            src={director.image}
                                            alt={director.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = '/images/speaker-default.jpg';
                                            }}
                                        />
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#5D2126]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Content */}
                                <div className="p-3 md:p-6">
                                    {/* Role Badge */}
                                    <div className="inline-block mb-1.5 md:mb-3 px-2 md:px-3 py-0.5 md:py-1 bg-[#5D2126]/10 text-[#5D2126] text-[8px] md:text-xs font-bold tracking-wider rounded-full uppercase">
                                        {director.role}
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xs md:text-xl font-bold text-[#5D2126] mb-1.5 md:mb-3 leading-tight">
                                        {director.name}
                                    </h3>

                                    {/* Bio */}
                                    <p className="text-[9px] md:text-sm text-[#593234] leading-relaxed line-clamp-3 md:line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                                        {director.bio}
                                    </p>
                                </div>

                                {/* Bottom Decorative Element */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#BC989A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
