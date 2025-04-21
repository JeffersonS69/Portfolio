import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ButtomsSocialNetworks = () => {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <a
        href="https://github.com/JeffersonS69"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" className="cursor-pointer">
          <FaGithub /> <span className="hidden xl:inline">Github</span>
        </Button>
      </a>
      <a
        href="https://www.linkedin.com/in/jefferson-garcia-ibarra-558822244"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="cursor-pointer">
          <FaLinkedin /> <span className="hidden xl:inline">LinkedIn</span>
        </Button>
      </a>
      <ModeToggle />
    </div>
  );
};

export default ButtomsSocialNetworks;
