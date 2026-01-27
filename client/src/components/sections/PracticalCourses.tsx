import { motion } from 'framer-motion';

const courseDays = [
  {
    date: '18/03',
    day: 'Quarta-feira',
    location: 'UNINASSAU',
    courses: [
      { name: 'RCP Pediátrico', price: 'R$ 120', spots: '20 vagas', shift: 'Noite' },
    ],
  },
  {
    date: '20/03',
    day: 'Sexta-feira',
    location: 'UNINOVAFAPI',
    courses: [
      { name: 'RCP Adulto', price: 'R$ 120', spots: '20 vagas', shift: 'Manhã' },
      { name: 'Parto', price: 'R$ 80', spots: '20 vagas', shift: 'Tarde' },
      { name: 'Imobilização', price: 'R$ 80', spots: '20 vagas', shift: 'Tarde' },
    ],
  },
  {
    date: '21/03',
    day: 'Sábado',
    location: 'FACID',
    courses: [
      { name: 'Acessos CV', price: 'R$ 80', spots: '20 vagas', shift: 'Manhã' },
      { name: 'Sutura', price: 'R$ 90', spots: '50 vagas (2 turmas)', shift: 'Manhã' },
      { name: 'IOT Adulto', price: 'R$ 80', spots: '30 vagas', shift: 'Manhã' },
    ],
  },
];

export default function PracticalCourses() {
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
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="cursos" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(/images/practical_courses.webp)',
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5D2126]/90 to-[#593234]/85"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F9F4F5] mb-6">Cursos Práticos</h2>
          <div className="w-16 h-1 bg-[#BC989A] mb-8 mx-auto"></div>
          <p className="text-lg text-[#D4B5B7]">
            Os cursos práticos acontecem nos dias 18, 20 e 21 de março. <br /> Confira a programação, locais e garanta sua vaga.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {courseDays.map((courseDay, index) => (
            <motion.div key={index} className="relative" variants={cardVariants}>
              {/* Card */}
              <motion.div
                className="p-6 bg-white rounded-lg shadow-lg h-full flex flex-col"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Date Badge & Location */}
                <div className="mb-6 border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="text-2xl font-bold text-[#5D2126]">{courseDay.date}</p>
                    <p className="text-sm text-[#BC989A] font-bold uppercase tracking-wide">{courseDay.day}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#593234]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="font-semibold text-lg">{courseDay.location}</p>
                  </div>
                </div>

                {/* Courses List */}
                <ul className="space-y-6 flex-grow">
                  {courseDay.courses.map((course, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-3 group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-[#BC989A] rounded-full mt-2 group-hover:bg-[#5D2126] transition-colors"></div>
                      <div className="w-full">
                        <h4 className="text-[#593234] font-bold text-lg leading-tight mb-1">{course.name}</h4>

                        <div className="flex flex-wrap gap-2 text-sm mt-1">
                          <span className="bg-[#5D2126]/10 text-[#5D2126] px-2 py-0.5 rounded font-medium">
                            {course.shift}
                          </span>
                          <span className="bg-[#BC989A]/20 text-[#593234] px-2 py-0.5 rounded font-medium">
                            {course.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 italic">
                          {course.spots}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Connector Line (hidden on mobile) */}
              {index < courseDays.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-[#BC989A]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#ingressos"
            className="inline-block px-8 py-4 bg-[#BC989A] text-[#5D2126] font-bold rounded-lg transition-all duration-300 hover:bg-[#D4B5B7] hover:shadow-2xl hover:text-[#4a1a1e]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Inscreva-se nos Cursos Práticos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}