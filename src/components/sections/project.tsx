import { CARDITEMS } from "@/utils/constants";
import BubbleText from "../bubble-text";
import CardAnimation from "../card-animation";

const Project = () => {
  return (
    <>
      <BubbleText
        text="Proyectos"
        style=" relative inline-block text-5xl sm:text-6xl font-bold tracking-wide cursor-default"
      >
        <span className="absolute left-1/2 -bottom-4 w-45 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full -translate-x-1/2" />
      </BubbleText>
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-28 xl:flex-wrap justify-center items-center mt-12 px-2">
        {CARDITEMS.map((item) => (
          <CardAnimation
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            nameSkills={item.nameSkills}
            pageLink={item.pageLink}
            repositoryLink={item.repositoryLink}
          />
        ))}
      </div>
    </>
  );
};

export default Project;
