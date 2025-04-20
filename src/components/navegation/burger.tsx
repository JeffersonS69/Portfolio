import { MenuIcon } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MENU } from "@/utils/constants";

const Burger = () => {
  return (
    <Sheet>
      <div className="flex gap-2 lg:hidden">
        <ModeToggle burger={true} />
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent
        side="top"
        className="max-h-screen overflow-auto font-[Pixelify_Sans]"
      >
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-2">
              <img
                src="/js.svg"
                className="max-h-8 bg-amber-50 rounded-md border-2"
                alt="js.svg logo"
              />
              <span className="text-lg font-semibold tracking-tighter">
                Jefferson
              </span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 pb-4">
          {MENU.map((item) => (
            <a href={item.link} key={item.name}>
              <SheetTrigger asChild className="text-lg">
                <Button variant="link" className="cursor-pointer">
                  {item.name}
                </Button>
              </SheetTrigger>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Burger;
