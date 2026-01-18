import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Speakers from '@/components/sections/Speakers';
import OrganizingCommittee from '@/components/sections/OrganizingCommittee';
import MedicalBoard from '@/components/sections/MedicalBoard';
import PracticalCourses from '@/components/sections/PracticalCourses';
import Schedule from '@/components/sections/Schedule';
import Tickets from '@/components/sections/Tickets';
import Edital from '@/components/sections/Edital';
import Location from '@/components/sections/Location';
import Partners from '@/components/sections/Partners';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import ScrollToTop from '@/components/common/ScrollToTop';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F4F5] w-full">
      <Header />
      <main id="main-content" className="pt-16 w-full" aria-label="Conteúdo principal">
        <Hero />
        <About />
        <Speakers />
        <OrganizingCommittee />
        <MedicalBoard />
        <PracticalCourses />
        <Schedule />
        <Tickets />
        <Edital />
        <Location />
        <Partners />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
