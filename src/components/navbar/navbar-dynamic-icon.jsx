import { useState } from "react";
import items from "../../api/nav-items.json";

const NavbarDynamicIcon = () => {
  const [navItems, setNavItems] = useState(items);
    let filteredNavItems = navItems.filter

  return (
    <div className="bg-brand-color h-[64px] flex w-full items-center justify-center text-navbar-button-color md:hidden">
      <h1>Selected Nav</h1>
    </div>
  );
};

export default NavbarDynamicIcon;
