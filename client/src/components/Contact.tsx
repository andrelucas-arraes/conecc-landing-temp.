import { useState } from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp Business API URL (you can change the number)
    // Format: https://wa.me/5511999999999?text=message
    const whatsappNumber = '5586999999999'; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contato" className="py-24 bg-white" aria-labelledby="contato-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 id="contato-heading" className="text-4xl md:text-5xl font-bold text-[#5D2126] mb-6">Entre em Contato</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto" aria-hidden="true"></div>
          <p className="text-lg text-[#593234]">
            Tem dúvidas sobre o CONECC? Entre em contato conosco. Responderemos sua mensagem em breve.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Email */}
            <motion.div className="flex gap-4" variants={itemVariants} whileHover={{ x: 5 }}>
              <div className="p-4 bg-[#ECD5D7] rounded-lg flex-shrink-0 h-fit">
                <Mail className="w-6 h-6 text-[#5D2126]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5D2126] mb-2">Email</h3>
                <a
                  href="mailto:coneccpi@gmail.com"
                  className="text-[#BC989A] hover:text-[#5D2126] transition-colors duration-200"
                >
                  coneccpi@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div className="flex gap-4" variants={itemVariants} whileHover={{ x: 5 }}>
              <div className="p-4 bg-[#ECD5D7] rounded-lg flex-shrink-0 h-fit">
                <Instagram className="w-6 h-6 text-[#5D2126]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5D2126] mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/coneccpi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BC989A] hover:text-[#5D2126] transition-colors duration-200"
                >
                  @coneccpi
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div className="flex gap-4" variants={itemVariants} whileHover={{ x: 5 }}>
              <div className="p-4 bg-[#ECD5D7] rounded-lg flex-shrink-0 h-fit">
                <MapPin className="w-6 h-6 text-[#5D2126]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5D2126] mb-2">Localização</h3>
                <p className="text-[#593234]">
                  Auditório Principal da Faculdade CET<br />
                  Rua Rio Grande do Norte, 790, Pirajá.<br />
                  CEP: 64003-420 - Teresina, Piauí
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="pt-8 border-t border-[#D4B5B7] text-center"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-[#5D2126] mb-4">Garanta sua presença</h3>
              <p className="text-[#593234] mb-6">
                Não perca a oportunidade de integrar este evento histórico e vivenciar uma experiência científica única.
              </p>
              <motion.a
                href="https://www.even3.com.br/conecc-i-congresso-de-especialidades-clinicas-e-cirurgicas-674375/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#5D2126] text-[#F9F4F5] font-bold rounded-lg transition-all duration-300 hover:bg-[#7D4E50] hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inscrever-se Agora
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-lg order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Title */}
              <h3 className="text-2xl font-bold text-[#5D2126] mb-4 text-center">Envie sua Mensagem</h3>

              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-bold text-[#5D2126] mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#D4B5B7] rounded-lg focus:border-[#BC989A] focus:outline-2 focus:outline-[#BC989A] focus:outline-offset-2 transition-colors duration-200 text-[#5D2126]"
                  placeholder="Digite seu nome completo"
                  aria-required="true"
                  aria-describedby="name-description"
                />
                <p id="name-description" className="sr-only">Campo obrigatório para seu nome completo</p>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-bold text-[#5D2126] mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#D4B5B7] rounded-lg focus:border-[#BC989A] focus:outline-2 focus:outline-[#BC989A] focus:outline-offset-2 transition-colors duration-200 text-[#5D2126]"
                  placeholder="seu.email@exemplo.com"
                  aria-required="true"
                  aria-describedby="email-description"
                />
                <p id="email-description" className="sr-only">Campo obrigatório para seu email</p>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-bold text-[#5D2126] mb-2">
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[#D4B5B7] rounded-lg focus:border-[#BC989A] focus:outline-2 focus:outline-[#BC989A] focus:outline-offset-2 transition-colors duration-200 text-[#5D2126] resize-none"
                  placeholder="Digite sua mensagem..."
                  aria-required="true"
                  aria-describedby="message-description"
                ></textarea>
                <p id="message-description" className="sr-only">Campo obrigatório para sua mensagem</p>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-[#5D2126] text-[#F9F4F5] font-bold rounded-lg transition-all duration-300 hover:bg-[#7D4E50] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#BC989A] focus-visible:outline-offset-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Enviar mensagem de contato"
              >
                Enviar Mensagem
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  className="p-4 bg-[#ECD5D7] border-l-4 border-[#BC989A] rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-[#5D2126] font-semibold">
                    ✓ Redirecionando para WhatsApp...
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

