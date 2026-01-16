import { motion } from 'framer-motion';

const supportTiers = [
    {
        name: 'Apoio Institucional',
        size: 'medium',
        supporters: [
            { name: 'Apoio Institucional 1', logo: 'https://i.ibb.co/ch9219nC/Design-sem-nome.png', link: 'https://www.instagram.com/crmpiaui' },
            { name: 'Apoio Institucional 2', logo: 'https://i.ibb.co/rRxJTYN3/Design-sem-nome-2.png', link: 'https://www.instagram.com/ambpiaui' },
            { name: 'Apoio Institucional 3', logo: 'https://i.ibb.co/cK2Ly4k4/Design-sem-nome-3.png', link: 'https://www.instagram.com/simepi' },
            { name: 'Apoio Institucional 4', logo: 'https://i.ibb.co/qMzdxVgz/Design-sem-nome-4.png', link: 'https://www.instagram.com/acadmedicinapi' },
        ]
    },
];

export default function InstitutionalSupport() {
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
                staggerChildren: 0.15,
            },
        },
    };

    const logoVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="apoio-institucional" className="py-24 bg-[#F9F4F5]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto mb-16 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Apoio Institucional</h2>
                    <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
                    <p className="text-lg text-[#593234]">
                        Instituições que apoiam e contribuem para o sucesso do I CONECC.
                    </p>
                </motion.div>

                {/* Support Grid */}
                <div className="space-y-12">
                    {supportTiers.map((tier, tierIndex) => (
                        <motion.div
                            key={tierIndex}
                            className="space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={gridVariants}
                        >
                            {/* Support Grid */}
                            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto" variants={gridVariants}>
                                {tier.supporters.map((supporter, index) => (
                                    <motion.a
                                        key={index}
                                        href={supporter.link || '#'}
                                        target={supporter.link ? "_blank" : undefined}
                                        rel={supporter.link ? "noopener noreferrer" : undefined}
                                        className={`bg-white rounded-lg border-2 border-[#D4B5B7] flex items-center justify-center transition-all duration-300 hover:border-[#BC989A] hover:shadow-lg cursor-pointer ${tier.size === 'large'
                                            ? 'h-32 sm:h-40 lg:h-48'
                                            : tier.size === 'medium'
                                                ? 'h-28 sm:h-36 lg:h-40'
                                                : 'h-24 sm:h-28 lg:h-32'
                                            }`}
                                        variants={logoVariants}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                    >
                                        <img
                                            src={supporter.logo}
                                            alt={`${supporter.name} - Apoio Institucional`}
                                            className="w-full h-full object-contain p-6"
                                        />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

