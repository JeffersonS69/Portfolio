import { MENU } from "@/utils/constants";
import ButtomsSocialNetworks from "../buttom/buttoms-social-networks";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const NavBar = () => {
  return (
    <>
      <p className="text-2xl tracking-tight">Jefferson</p>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {MENU.map((item) => (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                href={item.link}
                className={navigationMenuTriggerStyle()}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ButtomsSocialNetworks />
    </>
  );
};

export default NavBar;
