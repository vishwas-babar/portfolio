import { Project, SkillName } from '@/lib/types';
import Image from 'next/image';
import { GithubIcon, PreviewIcon } from '../../utils/icons';
import { skillList } from '@/appData';

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    livePreview,
    githubLink,
    cover,
    usedSkills,
  } = data;

  const getSkillIcon = (skillName: SkillName) => {
    const skill = skillList.find(skill => skill.name === skillName);
    return skill?.icon;
  };

  return (
    <div className="bg-secondary border-border flex flex-col rounded-[14px] border transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 group h-full">
      {/* cover image */}
      <figure className="w-full p-4 flex-shrink-0">
        <div
          className="w-full overflow-hidden rounded-lg"
          style={{ aspectRatio: '16/8.6' }}
        >
          <Image
            src={cover}
            width={400}
            height={300}
            alt="Project Cover"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </figure>

      {/* content section */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-secondary-content text-lg font-medium md:font-semibold mb-3">
          {title}
        </h3>

        {/* description */}
        <div className="bg-primary text-primary-content mb-4 p-4 rounded-lg flex-grow">
          <p className="text-[14px] font-normal md:text-base leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* used skills */}
        <div className="mb-4">
          <h4 className="text-secondary-content text-sm font-medium mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {usedSkills.map((skillName, index) => {
              const IconComponent = getSkillIcon(skillName);
              if (!IconComponent) return null;

              return (
                <div
                  key={index}
                  className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg p-1.5"
                  title={skillName}
                >
                  <Image
                    src={
                      typeof IconComponent === 'string'
                        ? IconComponent
                        : IconComponent.src ||
                          IconComponent.default ||
                          IconComponent
                    }
                    alt={skillName}
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-5 mt-auto pt-2">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-300 ease-out hover:scale-105 hover:text-accent/80 hover:shadow-md hover:shadow-accent/20 md:text-base group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PreviewIcon className="h-auto w-[18px] md:w-5 transition-transform duration-300 group-hover/link:rotate-12" />
              <span>Live Preview</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-300 ease-out hover:scale-105 hover:text-accent/80 hover:shadow-md hover:shadow-accent/20 md:text-base group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-[18px] md:w-5 transition-transform duration-300 group-hover/link:rotate-12" />
              <span>Github Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
