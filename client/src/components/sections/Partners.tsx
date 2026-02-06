import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Patrocinador Master - Fixo
const masterSponsor = {
    name: 'Patrocinador Master',
    logo: 'https://i.ibb.co/RGwDzn5s/Design-sem-nome-2.jpg',
    link: 'https://www.instagram.com/grupomedcof/'
};

// Patrocinador Executivo - Fixo
const executiveSponsors = [
    { name: 'Patrocinador Executivo 1', logo: 'https://i.ibb.co/BHCZG1Zk/upscalemedia-transformed.jpg', link: 'https://www.instagram.com/medsafebrasil' },
    // { name: 'Patrocinador Executivo 2', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: 'https://www.instagram.com/medsafebrasil' },
    // { name: 'Patrocinador Executivo 3', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: 'https://www.instagram.com/medsafebrasil' },
];

/* // Slider - Premium, Destaque, Essencial (rodam em sequência)
// COMENTADO: IMPLEMENTAÇÃO FUTURA
const sliderTiers = [
    {
        name: 'Patrocinador Premium',
        sponsors: [
            { name: 'Patrocinador Premium 1', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Premium 2', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Premium 3', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
        ]
    },
    {
        name: 'Patrocinador Destaque',
        sponsors: [
            { name: 'Patrocinador Destaque 1', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Destaque 2', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Destaque 3', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
        ]
    },
    {
        name: 'Patrocinador Essencial',
        sponsors: [
            { name: 'Patrocinador Essencial 1', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Essencial 2', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Essencial 3', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
        ]
    },
];
*/

// Apoio Institucional - Fixo no final (logos menores)
const institutionalSupport = [
    { name: 'CRM Piauí', logo: 'https://i.ibb.co/ch9219nC/Design-sem-nome.png', link: 'https://www.instagram.com/crmpiaui' },
    { name: 'AMB Piauí', logo: 'https://i.ibb.co/rRxJTYN3/Design-sem-nome-2.png', link: 'https://www.instagram.com/ambpiaui' },
    { name: 'SIMEPI', logo: 'https://i.ibb.co/cK2Ly4k4/Design-sem-nome-3.png', link: 'https://www.instagram.com/simepi' },
    { name: 'Academia de Medicina PI', logo: 'https://i.ibb.co/qMzdxVgz/Design-sem-nome-4.png', link: 'https://www.instagram.com/acadmedicinapi' },
];

export default function Partners() {
    // COMENTADO: Lógica do Slider
    /*
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slider every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderTiers.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    */

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

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    /*
    const slideVariants = {
        enter: { opacity: 0, x: 100 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };
    */

    return (
        <section id="parceiros" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto mb-8 md:mb-16 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Nossos Parceiros</h2>
                    <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
                    <p className="text-lg text-[#593234]">
                        O I CONECC conta com o apoio de instituições e empresas comprometidas com o avanço da medicina.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* PATROCINADOR MASTER - FIXO */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={gridVariants}
                    >
                        <h3 className="text-2xl font-bold text-[#5D2126] text-center">Patrocinador Master</h3>
                        <div className="max-w-md mx-auto">
                            <motion.a
                                href={masterSponsor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#F9F4F5] rounded-lg border-2 border-[#D4B5B7] flex items-center justify-center h-72 transition-all duration-300 hover:border-[#BC989A] hover:shadow-lg cursor-pointer"
                                variants={logoVariants}
                                whileHover={{ y: -5, scale: 1.03 }}
                            >
                                <img
                                    src={masterSponsor.logo}
                                    alt={`${masterSponsor.name} - Patrocinador`}
                                    loading="lazy"
                                    className="w-full h-full object-contain md:object-cover rounded-lg"
                                />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* PATROCINADOR EXECUTIVO - FIXO */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={gridVariants}
                    >
                        <h3 className="text-2xl font-bold text-[#5D2126] text-center">Patrocinador Executivo</h3>
                        <motion.div
                            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
                            variants={gridVariants}
                        >
                            {executiveSponsors.map((sponsor, index) => (
                                <motion.a
                                    key={index}
                                    href={sponsor.link || '#'}
                                    target={sponsor.link ? "_blank" : undefined}
                                    rel={sponsor.link ? "noopener noreferrer" : undefined}
                                    className="bg-[#F9F4F5] rounded-lg border-2 border-[#D4B5B7] flex items-center justify-center h-56 w-full sm:w-72 transition-all duration-300 hover:border-[#BC989A] hover:shadow-lg cursor-pointer"
                                    variants={logoVariants}
                                    whileHover={{ y: -5, scale: 1.03 }}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} - Patrocinador`}
                                        loading="lazy"
                                        className="w-full h-full object-contain md:object-cover rounded-lg"
                                    />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* SLIDER AUTOMÁTICO - Premium, Destaque, Essencial */}
                    {/* COMENTADO: IMPLEMENTAÇÃO FUTURA */}
                    {/*
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={gridVariants}
                    >
                        
                        <div className="flex justify-center gap-2 mb-4">
                            {sliderTiers.map((tier, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${currentSlide === index
                                            ? 'bg-[#5D2126] text-white'
                                            : 'bg-[#F9F4F5] text-[#5D2126] hover:bg-[#D4B5B7]'
                                        }`}
                                >
                                    {tier.name.replace('Patrocinador ', '')}
                                </button>
                            ))}
                        </div>

                        
                        <div className="relative overflow-hidden min-h-[320px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-bold text-[#5D2126] text-center">
                                        {sliderTiers[currentSlide].name}
                                    </h3>
                                    <motion.div
                                        className="flex flex-wrap justify-center gap-3 sm:gap-6 max-w-5xl mx-auto px-2 sm:px-0"
                                        variants={gridVariants}
                                    >
                                        {sliderTiers[currentSlide].sponsors.map((sponsor, index) => (
                                            <motion.a
                                                key={index}
                                                href={sponsor.link || '#'}
                                                target={sponsor.link ? "_blank" : undefined}
                                                rel={sponsor.link ? "noopener noreferrer" : undefined}
                                                className={`bg-[#F9F4F5] rounded-lg border-2 border-[#D4B5B7] flex items-center justify-center transition-all duration-300 hover:border-[#BC989A] hover:shadow-lg cursor-pointer w-36 sm:w-48 md:w-56 ${currentSlide === 0 ? 'h-32 sm:h-48' : currentSlide === 1 ? 'h-28 sm:h-44' : 'h-24 sm:h-36'
                                                    }`}
                                                variants={logoVariants}
                                                whileHover={{ y: -5, scale: 1.03 }}
                                            >
                                                <img
                                                    src={sponsor.logo}
                                                    alt={`${sponsor.name} - Patrocinador`}
                                                    loading="lazy"
                                                    className="w-full h-full object-contain p-2 sm:p-4 rounded-lg"
                                                />
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        
                        <div className="flex justify-center gap-2 mt-4">
                            {sliderTiers.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-8 bg-[#5D2126]' : 'w-2 bg-[#D4B5B7]'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                    */}

                    {/* APOIO INSTITUCIONAL - FIXO (logos menores) */}
                    <motion.div
                        className="space-y-6 pt-8 border-t-2 border-[#D4B5B7]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={gridVariants}
                    >
                        <h3 className="text-xl font-bold text-[#5D2126] text-center">Apoio Institucional</h3>
                        <p className="text-center text-[#593234] max-w-2xl mx-auto">
                            Instituições que apoiam e contribuem para o sucesso do I CONECC.
                        </p>
                        <motion.div
                            className="grid grid-cols-2 justify-items-center gap-2 max-w-xs mx-auto sm:flex sm:flex-wrap justify-center sm:gap-4 sm:max-w-5xl"
                            variants={gridVariants}
                        >
                            {institutionalSupport.map((support, index) => (
                                <motion.a
                                    key={index}
                                    href={support.link || '#'}
                                    target={support.link ? "_blank" : undefined}
                                    rel={support.link ? "noopener noreferrer" : undefined}
                                    className="bg-white rounded-lg border border-[#D4B5B7] flex items-center justify-center w-24 h-20 sm:w-28 sm:h-24 transition-all duration-300 hover:border-[#BC989A] hover:shadow-md cursor-pointer"
                                    variants={logoVariants}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                >
                                    <img
                                        src={support.logo}
                                        alt={`${support.name}`}
                                        loading="lazy"
                                        className="w-full h-full object-contain p-1 rounded-lg"
                                    />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}