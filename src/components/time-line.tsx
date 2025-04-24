import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { IconType } from "react-icons/lib";

const colorClasses = {
  violet: {
    border: "border-violet-800 hover:border-violet-600",
    bg: "bg-violet-700/25 hover:bg-violet-600/40",
    stroke: "stroke-violet-800",
    borderImg: "border-violet-800",
    badge: "border-violet-900",
  },
  gray: {
    border: "border-gray-800 hover:border-gray-600",
    bg: "bg-gray-700/25 hover:bg-gray-600/40",
    stroke: "stroke-gray-800",
    borderImg: "border-gray-800",
    badge: "border-gray-900",
  },
  teal: {
    border: "border-teal-800 hover:border-teal-600",
    bg: "bg-teal-700/25 hover:bg-teal-600/40",
    stroke: "stroke-teal-800",
    borderImg: "border-teal-800",
    badge: "border-teal-900",
  },
  sky: {
    border: "border-sky-800 hover:border-sky-600",
    bg: "bg-sky-700/25 hover:bg-sky-600/40",
    stroke: "stroke-sky-800",
    borderImg: "border-sky-800",
    badge: "border-sky-900",
  },
};

export function Item({
  nameCompany,
  position,
  date,
  description,
  skills,
  color,
  imagen,
}: Readonly<{
  nameCompany: string;
  position: string;
  date: string;
  description: string;
  skills: { name: string; icon: IconType }[];
  color: string;
  imagen: string;
}>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { once: false, margin: "50px" });

  const colorStyle =
    colorClasses[color as keyof typeof colorClasses] || colorClasses.violet;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`w-auto sm:w-md md:w-lg h-auto sm:h-70 md:h-82 border-2 ${colorStyle.border} relative p-2 rounded-2xl ${colorStyle.bg} shadow-xl transition-colors duration-400 ease-in-out`}
    >
      <figure className="hidden sm:flex sticky top-0 w-20 h-20 m-0 p-0">
        <svg
          className="-translate-x-24 -rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className={`${colorStyle.stroke} opacity-20`}
            strokeWidth="5"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            strokeWidth="5"
            fill="none"
            className={colorStyle.stroke}
            style={{
              pathLength: scrollYProgress,
            }}
          />
        </svg>
      </figure>

      <div className="sm:absolute sm:top-3 md:top-4 sm:left-0 w-auto h-auto flex flex-col justify-center items-start text-start px-4 text-sm gap-3">
        <div className="flex items-center gap-2">
          <img
            alt={nameCompany}
            src={imagen}
            className={`rounded-full w-10 md:w-15 h-10 md:h-15 object-cover border-2 ${colorStyle.borderImg}`}
          />
          <div className="flex flex-col">
            <p className="font-bold text-lg md:text-2xl tracking-wide">
              {nameCompany}
            </p>
            <p className="tracking-wide md:text-lg text-gray-300">{position}</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 md:text-base">{date}</p>
        <p className="text-md text-justify tracking-wide md:text-base">
          {description}
        </p>
        <p className="text-sm font-bold tracking-wide md:text-base">
          Aptitudes 💎
        </p>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className={`text-sm ${colorStyle.badge}`}
            >
              <div className="flex gap-1 items-center font-light text-base">
                <skill.icon />
                <span>{skill.name}</span>
              </div>
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
