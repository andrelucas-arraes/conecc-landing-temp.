import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import PracticalCourses from '@/components/PracticalCourses';
import Schedule from '@/components/Schedule';
import Tickets from '@/components/Tickets';
import Edital from '@/components/Edital';
import Location from '@/components/Location';
import Partners from '@/components/Partners';
import InstitutionalSupport from '@/components/InstitutionalSupport';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F4F5] w-full">
      <Header />
      <main id="main-content" className="pt-16 w-full" aria-label="Conteúdo principal">
        <Hero />
        <About />
        <Speakers />
        <PracticalCourses />
        <Schedule />
        <Tickets />
        <Edital />
        <Location />
        <Partners />
        <InstitutionalSupport />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
