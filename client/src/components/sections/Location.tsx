import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Location() {
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

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="localizacao" className="py-24 bg-[#F9F4F5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Local do Evento</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftVariants}
          >
            {/* Venue */}
            <motion.div
              className="p-8 bg-white rounded-lg shadow-md border-l-4 border-[#BC989A]"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#ECD5D7] rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#5D2126]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#5D2126] mb-2">Auditório Principal da Faculdade CET</h3>
                  <p className="text-[#593234] leading-relaxed">
                    Rua Rio Grande do Norte, 790, Pirajá.<br />
                    CEP: 64003-420 - Teresina, Piauí
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map Button */}
            <motion.a
              href="https://maps.app.goo.gl/ddfp8uLcvd6vDuyQA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5D2126] text-[#F9F4F5] font-bold rounded-lg transition-all duration-300 hover:bg-[#7D4E50] hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="w-5 h-5" />
              Abrir no Google Maps
            </motion.a>

            {/* Additional Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-[#5D2126]">Como Chegar</h3>
              <div className="space-y-3 text-[#593234]">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="font-semibold text-[#5D2126]">De carro:</span> O auditório possui estacionamento
                  próprio com capacidade para centenas de veículos.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="font-semibold text-[#5D2126]">Transporte público:</span> Localizado em área de fácil
                  acesso via transporte público de Teresina.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="font-semibold text-[#5D2126]">Acessibilidade:</span> O local é totalmente acessível
                  para pessoas com mobilidade reduzida.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg h-full min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rightVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1611024668987!2d-42.82754832501829!3d-5.077623494899185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39cc84e2b6e7%3A0xe6f248e48e730fe1!2sUNI-CET!5e0!3m2!1spt-BR!2sbr!4v1768594714014!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

