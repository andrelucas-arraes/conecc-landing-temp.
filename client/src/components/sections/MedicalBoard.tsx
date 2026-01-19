import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

// Dados da Diretoria Médica (4 médicos)
const medicalDirectors = [
    {
        name: 'Dr. Atêncio Queiroga',
        role: 'Presidente',
        bio: 'Médico Pediatra e Gestor Hospitalar. É Diretor Geral do Hospital Maternidade Buenos Aires, Presidente da AMB-PI e Conselheiro do CRM-PI. Possui vasta experiência como docente e preceptor em Pediatria.',
        image: 'https://i.ibb.co/v4077sYX/Whats-App-Image-2026-01-18-at-5-13-42-PM.jpg'
    },
    {
        name: 'Dr. Jocerlano Sousa',
        role: 'Vice-Presidente',
        bio: 'Cirurgião Cardiovascular com residência pelo InCor-USP. Possui experiência internacional com observerships na Alemanha (Herzzentrum Leipzig) e EUA (Cleveland Clinic). Atua nos hospitais São Marcos, ItaCor e Unimed Primavera.',
        image: 'https://i.ibb.co/N60kVCrp/Whats-App-Image-2026-01-18-at-5-18-32-PM.jpg'
    },
    {
        name: 'Dr. Rogério Medeiros',
        role: 'Diretor Científico',
        bio: 'Cirurgião Pediátrico e Geral, atual Diretor Técnico do HUT. Mestre em Saúde da Família e Doutorando em Engenharia Biomédica. Possui dupla graduação (Medicina e Enfermagem) e ampla vivência em gestão assistencial.',
        image: 'https://i.ibb.co/k2Z02Y2v/Whats-App-Image-2026-01-18-at-5-17-19-PM.jpg'
    },
    {
        name: 'Dr. Williams Cardec',
        role: 'Diretor de Cursos Práticos',
        bio: 'Médico e Advogado com atuação em Direito Médico. Especialista em Clínica Médica, Emergência e Medicina do Trabalho. É Conselheiro do CFM e Vice-corregedor do CRM-PI. Mestre em Medicina e Doutorando em Saúde Baseada em Evidências.',
        image: 'https://i.ibb.co/sdybfqmC/Whats-App-Image-2026-01-18-at-3-14-35-PM.jpg'
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
                            <div className="relative h-full flex flex-col bg-[#F9F4F5] rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
                                {/* Top Accent Bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BC989A] via-[#5D2126] to-[#BC989A]"></div>

                                {/* Image Container */}
                                <div className="relative overflow-hidden flex-shrink-0">
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
                                <div className="p-3 md:p-6 flex flex-col flex-1">
                                    {/* Role Badge */}
                                    <div className="inline-block mb-1.5 md:mb-3 px-2 md:px-3 py-0.5 md:py-1 bg-[#5D2126]/10 text-[#5D2126] text-[8px] md:text-xs font-bold tracking-wider rounded-full uppercase self-start">
                                        {director.role}
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xs md:text-xl font-bold text-[#5D2126] mb-1.5 md:mb-3 leading-tight">
                                        {director.name}
                                    </h3>

                                    {/* Bio */}
                                    <p className="text-[9px] md:text-sm text-[#593234] leading-relaxed md:line-clamp-4 md:group-hover:line-clamp-none transition-all duration-300 flex-1">
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
