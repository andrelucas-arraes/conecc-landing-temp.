import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

// Dados da Comissão Organizadora (17 pessoas)
const committeeMembers = [
    {
        name: 'Sabrina Dias',
        role: 'Presidente',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Maria Eduarda Cabral',
        role: 'Vice Presidente',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Erika Custódio',
        role: 'Diretora Geral',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Angella Moniely',
        role: 'Diretora de Logística e Infraestrutura',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Alice Emanuelle',
        role: 'Diretora de Logística e Infraestrutura',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Estéfane Portela',
        role: 'Diretora de Marketing',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Habina Alencar',
        role: 'Diretora de Patrocínio',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Sabrina Vitória',
        role: 'Diretora de Cursos Práticos',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Maria Eveline',
        role: 'Diretora de Cursos Práticos',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Antônio Mourão',
        role: 'Diretor de Administração',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Salma Clímaco',
        role: 'Diretora de Programação Científica',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'George Torquato',
        role: 'Diretor de Administração',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Lucas Teixeira',
        role: 'Diretor de Marketing',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Carlos Rafael',
        role: 'Diretor de Patrocínio',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Layane Coutinho',
        role: 'Diretora de Trabalhos Científicos',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Wesley Brandolee',
        role: 'Diretor de Programação Científica',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    },
    {
        name: 'Expedita Escórcio',
        role: 'Diretora de Trabalhos Científicos',
        image: 'https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-136701243.jpg'
    }
];

export default function OrganizingCommittee() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const containerRef = useRef<HTMLDivElement>(null);

    // Responsive cards per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setCardsPerView(2);
            } else if (window.innerWidth < 640) {
                setCardsPerView(2);
            } else if (window.innerWidth < 768) {
                setCardsPerView(3);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(3);
            } else {
                setCardsPerView(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(committeeMembers.length / cardsPerView);
    const maxIndex = totalPages - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="comissao" className="relative py-10 md:py-24 overflow-hidden bg-gradient-to-b from-[#F9F4F5] to-[#EDE4E5]">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#5D2126]/5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#BC989A]/10 blur-3xl translate-x-1/2 translate-y-1/2"></div>

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
                        <Users className="w-6 h-6 md:w-10 md:h-10 text-[#5D2126]" />
                    </div>
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#5D2126] mb-2 md:mb-6">
                        Comissão Organizadora
                    </h2>
                    <div className="w-12 md:w-16 h-1 bg-[#BC989A] mb-3 md:mb-6 mx-auto"></div>
                    <p className="text-xs md:text-lg text-[#593234] px-2 md:px-0">
                        Conheça os profissionais dedicados que trabalham para fazer do CONECC 2026 um evento memorável.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`absolute -left-1 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${currentIndex === 0
                            ? 'opacity-40 cursor-not-allowed'
                            : 'hover:bg-[#5D2126] hover:text-white hover:shadow-xl'
                            }`}
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className={`absolute -right-1 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${currentIndex >= maxIndex
                            ? 'opacity-40 cursor-not-allowed'
                            : 'hover:bg-[#5D2126] hover:text-white hover:shadow-xl'
                            }`}
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </button>

                    {/* Cards Container */}
                    <div className="overflow-hidden mx-6 md:mx-0" ref={containerRef}>
                        <motion.div
                            className="flex will-change-transform"
                            animate={{
                                x: `-${currentIndex * 100}%`,
                            }}
                            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
                        >
                            {committeeMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-1 md:px-2"
                                    style={{
                                        width: `${100 / cardsPerView}%`,
                                    }}
                                >
                                    <div className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                        {/* Background Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5D2126]/90 z-10"></div>

                                        {/* Member Image */}
                                        <div className="aspect-[3/4] sm:aspect-[3/4] overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = '/images/speaker-default.jpg';
                                                }}
                                            />
                                        </div>

                                        {/* Member Info */}
                                        <div className="absolute bottom-0 left-0 right-0 z-20 p-2 md:p-5 text-center">
                                            <h3 className="text-white font-bold text-[10px] sm:text-sm md:text-lg mb-0.5 md:mb-1 drop-shadow-lg leading-tight">
                                                {member.name}
                                            </h3>
                                            <p className="text-[#F9F4F5]/90 text-[8px] sm:text-xs md:text-sm font-medium leading-tight">
                                                {member.role}
                                            </p>
                                        </div>

                                        {/* Decorative Border */}
                                        <div className="absolute top-3 left-3 right-3 bottom-3 border-2 border-white/20 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${currentIndex === index
                                    ? 'w-8 h-2 bg-[#5D2126]'
                                    : 'w-2 h-2 bg-[#BC989A]/50 hover:bg-[#BC989A]'
                                    }`}
                                aria-label={`Ir para slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
