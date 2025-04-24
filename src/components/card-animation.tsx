import { Earth } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { CARDSKILLS } from "@/utils/icons";

const CardAnimation = ({
  title,
  description,
  image,
  nameSkills,
  repositoryLink,
  pageLink,
}: {
  title: string;
  description: string;
  image: string;
  nameSkills: keyof typeof CARDSKILLS;
  repositoryLink?: string;
  pageLink: string;
}) => {
  return (
    <CardContainer>
      <CardBody className="bg-white relative group/card  hover:shadow-2xl hover:shadow-amber-500/[0.3] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[28rem] h-auto sm:min-h-[30rem]  rounded-xl p-6 border flex flex-col justify-between">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <motion.div
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <picture>
              <img
                src={image}
                width="100%"
                height="100%"
                className="h-42 w-full rounded-xl group-hover/card:shadow-xl border-2 border-neutral-300 dark:border-muted"
                alt={nameSkills}
              />
            </picture>
          </motion.div>
        </CardItem>
        <CardItem translateZ={40} className="w-full mt-4">
          <div className="flex justify-center gap-2 flex-wrap">
            {CARDSKILLS[nameSkills].map((skill) => (
              <Badge key={skill.name} className="cursor-default">
                <div className="flex gap-1 items-center">
                  <skill.icon />
                  {skill.name}
                </div>
              </Badge>
            ))}
          </div>
        </CardItem>
        <div className="flex justify-between items-end mt-4">
          <CardItem
            translateZ={20}
            as="a"
            href={pageLink}
            target="__blank"
            className="flex gap-1 items-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Earth className="h-4 w-4" />
            Visitar
          </CardItem>
          {repositoryLink && (
            <CardItem
              translateZ={20}
              as="a"
              href={repositoryLink}
              target="__blank"
              className="flex gap-1 items-center px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
            >
              <FaGitAlt />
              Repositorio
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default CardAnimation;
