import { SKILLS } from "@/utils/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-black text-center"
    >
      <h2 className="text-4xl font-bold mb-4">Habilidades</h2>
      <Tabs defaultValue="frontend" className="mt-8 w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="frontend" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SKILLS.frontend.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border"
              >
                <skill.icon className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="backend" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SKILLS.backend.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border"
              >
                <skill.icon className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="tools" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SKILLS.tools.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border"
              >
                <skill.icon className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Skills;
