import { SKILLS } from "@/utils/icons";
import { TabsContent } from "./ui/tabs";
import { motion } from "framer-motion";

const TabsContentSkills = ({ value }: { value: keyof typeof SKILLS }) => {
  return (
    <TabsContent value={value} className="mt-4">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {SKILLS[value].map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <skill.icon className="h-8 w-8 mb-2" />
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </TabsContent>
  );
};

export default TabsContentSkills;
