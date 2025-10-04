import { skillList, experiences } from '@/appData';
import ContactSection from '@/components/Contact/ContactSection';
import Hero from '@/components/Hero/Hero';
import ProjectSection from '@/components/Projects/ProjectSection';
import Skills from '@/components/Skills/Skills';
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
      <section className="min-h-screen flex items-center">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen mt-20 flex items-center">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <ProjectSection />
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
