import { SKILLS } from "@/utils/icons";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TabsContentSkills from "../tabs_content_skills";
import BubbleText from "../bubble_text";

const Skills = () => {
  return (
    <>
      <BubbleText
        text="Habilidades"
        style="text-6xl font-bold tracking-wide cursor-default"
      />
      <Tabs
        defaultValue="frontend"
        className="mt-8 w-full max-w-3xl xl:max-w-6xl mx-auto"
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
