import Burger from "./burger";
import NavBar from "./navbar";

const NavigationNavbar = () => {
  return (
    <nav
      className="fixed z-50 w-full px-4 py-2 flex items-center justify-between lg:px-12
  bg-white/90 shadow-md 
  dark:bg-black/50  dark:shadow-stone-50 dark:shadow-xs
   "
    >
      <NavBar />
      <Burger />
    </nav>
  );
};

export default NavigationNavbar;
