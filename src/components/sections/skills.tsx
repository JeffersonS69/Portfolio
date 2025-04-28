import { SKILLS } from "@/utils/icons";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TabsContentSkills from "../tabs-content-skills";
import BubbleText from "../bubble-text";

const Skills = () => {
  return (
    <>
      <BubbleText
        text="Habilidades"
        style=" relative inline-block text-5xl sm:text-6xl font-bold tracking-wide cursor-default "
      >
        <span className="absolute left-1/2 -bottom-4 w-45 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full -translate-x-1/2" />
      </BubbleText>
      <Tabs
        defaultValue="frontend"
        className="mt-15 w-full max-w-3xl xl:max-w-6xl mx-auto"
      >
        <TabsList className="grid w-full grid-cols-3">
          {Object.keys(SKILLS).map((key) => (
            <TabsTrigger
              key={key}
              value={key as keyof typeof SKILLS}
              className="transition-all duration-300 ease-in-out data-[state=active]:scale-105 data-[state=active]:bg-muted "
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContentSkills value="frontend" />
        <TabsContentSkills value="backend" />
        <TabsContentSkills value="tools" />
      </Tabs>
    </>
  );
};

export default Skills;
