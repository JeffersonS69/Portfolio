import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import ButtomsSocialNetworks from "./buttoms-social-networks";

const NavBar = () => {
  return (
    <nav
      className="fixed z-50 w-full px-4 py-2 flex items-center justify-between lg:px-12
  bg-white/90 shadow-md 
  dark:bg-black/50  dark:shadow-stone-50 dark:shadow-xs
   "
    >
      <p className="text-2xl tracking-tight">Jefferson</p>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Inicio
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Proyectos
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Sobre mí
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Contácteme
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ButtomsSocialNetworks />
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
              <a href="#" className="flex items-center gap-2">
                <img
                  src="src/assets/js.svg"
                  className="max-h-8 bg-amber-50 rounded-md border-2"
                  alt="js.svg logo"
                />
                <span className="text-lg font-semibold tracking-tighter">
                  JeffersonG.com
                </span>
              </a>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col p-4">
            <div className="flex flex-col gap-6">
              <a href="#" className="font-medium">
                Inicio
              </a>
              <a href="#" className="font-medium">
                Proyectos
              </a>
              <a href="#" className="font-medium">
                Sobre mí
              </a>
              <a href="#" className="font-medium">
                Contácteme
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export { NavBar };
