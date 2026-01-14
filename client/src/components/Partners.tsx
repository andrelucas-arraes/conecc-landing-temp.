import { motion } from 'framer-motion';

const sponsorTiers = [
    {
        name: 'Patrocinador Master',
        count: 1,
        size: 'xlarge',
    },
    {
        name: 'Patrocinador Executivo',
        count: 3,
        size: 'large',
    },
    {
        name: 'Patrocinador Premium',
        count: 3,
        size: 'medium',
    },
    {
        name: 'Patrocinador Destaque',
        count: 4,
        size: 'small',
    },
    {
        name: 'Patrocinador Essencial',
        count: 4,
        size: 'xsmall',
    },
];

export default function Partners() {
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

    return (
        <section id="parceiros" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto mb-16 text-center"
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

                {/* Sponsor Tiers */}
                <div className="space-y-12">
                    {sponsorTiers.map((tier, tierIndex) => (
                        <motion.div
                            key={tierIndex}
                            className="space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={gridVariants}
                        >
                            {/* Tier Title */}
                            <h3 className="text-2xl font-bold text-[#5D2126] text-center">{tier.name}</h3>

                            {/* Sponsor Grid */}
                            <motion.div
                                className={`grid gap-8 ${tier.size === 'xlarge'
                                    ? 'grid-cols-1 max-w-md mx-auto'
                                    : tier.size === 'large'
                                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto'
                                        : tier.size === 'medium'
                                            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto'
                                            : tier.size === 'small'
                                                ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                                                : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                                    }`}
                                variants={gridVariants}
                            >
                                {Array.from({ length: tier.count }).map((_, index) => (
                                    <motion.a
                                        key={index}
                                        href="https://www.claro.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`bg-[#F9F4F5] rounded-lg border-2 border-[#D4B5B7] flex items-center justify-center transition-all duration-300 hover:border-[#BC989A] hover:shadow-lg cursor-pointer ${tier.size === 'xlarge'
                                            ? 'h-72'
                                            : tier.size === 'large'
                                                ? 'h-56'
                                                : tier.size === 'medium'
                                                    ? 'h-44'
                                                    : tier.size === 'small'
                                                        ? 'h-36'
                                                        : 'h-28'
                                            }`}
                                        variants={logoVariants}
                                        whileHover={{ y: -5, scale: 1.03 }}
                                    >
                                        <img
                                            src="/images/claro-logo.jpg"
                                            alt="Claro - Patrocinador"
                                            loading="lazy"
                                            className="w-full h-full object-cover rounded-lg"
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

