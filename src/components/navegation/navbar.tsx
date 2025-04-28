import { MENU } from "@/utils/constants";
import ButtomsSocialNetworks from "../buttom/buttoms-social-networks";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import BubbleText from "../bubble-text";

const NavBar = () => {
  return (
    <>
      <BubbleText
        text="Jefferson"
        style="text-2xl tracking-wide cursor-default"
      />
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
