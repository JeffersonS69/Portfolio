import { ITEMSEXPERIENCE } from "@/utils/constants";
import BubbleText from "../bubble-text";
import { Item } from "../time-line";

const Experience = () => {
  return (
    <>
      <BubbleText
        text="Experiencias"
        style=" relative inline-block text-5xl sm:text-6xl font-bold tracking-wide cursor-default "
      >
        <span className="absolute left-1/2 -bottom-4 w-45 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full -translate-x-1/2" />
      </BubbleText>
      <div className="flex flex-col gap-15 mt-20 sm:px-20 overflow-x-hidden sm:overflow-x-visible">
        {ITEMSEXPERIENCE.map((item) => (
          <Item
            key={item.nameCompany}
            nameCompany={item.nameCompany}
            position={item.position}
            date={item.date}
            description={item.description}
            skills={item.skills}
            imagen={item.imagen}
            color={item.color}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
