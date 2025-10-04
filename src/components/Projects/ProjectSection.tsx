import { projects } from '@/appData';
import SectionHeading from '../SectionHeading/SectionHeading';
import ProjectCard from './ProjectCard';

const ProjectSection: React.FC = () => {
  return (
    <section id="projects">
      <SectionHeading title="// Projects" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map(project => (
          <ProjectCard key={project.priority} data={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
