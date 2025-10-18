import { skillList, experiences } from '@/appData';
import ContactSection from '@/components/Contact/ContactSection';
import Hero from '@/components/Hero/Hero';
import ProjectSection from '@/components/Projects/ProjectSection';
import Skills from '@/components/Skills/Skills';
import Footer from '@/components/Footer/Footer';
import { ExperienceTimeline } from '@/components/Experience';

export default async function Home() {
  return (
    <main>
      {/* Hero + Skills Section */}
      <section className="min-h-screen flex flex-col">
        <Hero />
        {/* <div className="flex-1 flex items-center"> */}
        <Skills skills={skillList} />
        {/* </div> */}
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ProjectSection />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
