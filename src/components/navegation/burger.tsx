import { MenuIcon } from "lucide-react";
import { ModeToggle } from "../buttom/mode-toggle";
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
                src="./Jeffry.png"
                className="max-h-12 drop-shadow-xl bg-gray-400/80 rounded-lg border-1 border-gray-500"
                alt="jeffry.png logo"
              />
              <div>
                <p className="text-sm text-gray-600 tracking-wide  dark:text-gray-400">
                  Jefferson Garcia
                </p>
                <p className="text-sm text-gray-400 tracking-wide  dark:text-gray-600">
                  ibarra.jefferson1@gmail.com
                </p>
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 pb-6">
          {MENU.map((item) => (
            <SheetTrigger asChild key={item.name}>
              <a href={item.link}>
                <Button
                  type="submit"
                  variant="link"
                  className="cursor-pointer text-lg w-full items-start justify-start"
                >
                  {item.name}
                </Button>
              </a>
            </SheetTrigger>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Burger;
