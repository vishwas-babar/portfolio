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

  // Function to get skill icon by skill name
  const getSkillIcon = (skillName: SkillName) => {
    const skill = skillList.find(skill => skill.name === skillName);
    return skill?.icon;
  };

  return (
    <div className="bg-secondary border-border flex flex-col rounded-[14px] border overflow-hidden">
      {/* Cover Image - Full Width */}
      <figure
        className="w-full"
        style={{
          aspectRatio: '16/8',
          width: 'auto',
          height: '310px',
        }}
      >
        <Image
          src={cover}
          width={400}
          height={225}
          alt="Project Cover"
          className="h-full w-full p-3 rounded-2xl overflow-hidden object-cover rounded-t-[14px]"
          // style={{ aspectRatio: '16/7' }}
        />
      </figure>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-secondary-content text-lg font-medium md:font-semibold mb-3">
          {title}
        </h3>

        {/* Short Description */}
        <div className="bg-primary text-primary-content mb-4 p-4 rounded-lg">
          <p className="text-[14px] font-normal md:text-base">
            {shortDescription}
          </p>
        </div>

        {/* Skills Used */}
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
                    src={IconComponent}
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

        {/* Links */}
        <div className="flex gap-5">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-[18px] md:w-5" />
              <span>Github Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
