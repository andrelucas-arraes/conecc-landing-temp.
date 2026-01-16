import { motion } from 'framer-motion';

const sponsorTiers = [
    {
        name: 'Patrocinador Master',
        size: 'xlarge',
        sponsors: [
            { name: 'Patrocinador Master', logo: 'https://i.ibb.co/RGwDzn5s/Design-sem-nome-2.jpg', link: 'https://www.instagram.com/grupomedcof/' },
        ]
    },
    {
        name: 'Patrocinador Executivo',
        size: 'large',
        sponsors: [
            { name: 'Patrocinador Executivo 1', logo: 'https://i.ibb.co/BHCZG1Zk/upscalemedia-transformed.jpg', link: 'https://www.instagram.com/medsafebrasil' },
            { name: 'Patrocinador Executivo 2', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: 'https://www.instagram.com/medsafebrasil' },
            { name: 'Patrocinador Executivo 3', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: 'https://www.instagram.com/medsafebrasil' },

        ]
    },
    {
        name: 'Patrocinador Premium',
        size: 'medium',
        sponsors: [
            { name: 'Patrocinador Premium 1', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Premium 2', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Premium 3', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
        ]
    },
    {
        name: 'Patrocinador Destaque',
        size: 'small',
        sponsors: [
            { name: 'Patrocinador Destaque 1', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Destaque 2', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Destaque 3', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Destaque 4', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
        ]
    },
    {
        name: 'Patrocinador Essencial',
        size: 'xsmall',
        sponsors: [
            { name: 'Patrocinador Essencial 1', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Essencial 2', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Essencial 3', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
            { name: 'Patrocinador Essencial 4', logo: 'https://i.ibb.co/VYf5nBYS/Design-sem-nome-5.png', link: '' },
        ]
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
                                {tier.sponsors.map((sponsor, index) => (
                                    <motion.a
                                        key={index}
                                        href={sponsor.link || '#'}
                                        target={sponsor.link ? "_blank" : undefined}
                                        rel={sponsor.link ? "noopener noreferrer" : undefined}
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
                                            src={sponsor.logo}
                                            alt={`${sponsor.name} - Patrocinador`}
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

