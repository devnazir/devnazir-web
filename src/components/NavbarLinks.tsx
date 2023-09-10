import { useState } from "react";
import { MENUS } from "../constants";
import Bars from "../icons/Bars";
import classNames from "../utils";

const NavbarLinks = () => {
  const currentPath = window.location.pathname.slice(1);
  const [showLinks, setShowLinks] = useState(false);

  const handleClickBars = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <ul
        className={classNames(
          "md:flex gap-4 md:gap-12 hidden md:flex-row flex-col md:static fixed z-[10]  md:top-0 top-[56px] right-0 left-0 md:p-0 p-4  bg-white md:bg-transparent",
          {
            "!flex": showLinks,
          },
        )}
      >
        {MENUS.map((menu) => (
          <li className="inline-block text-sm" key={menu.name}>
            <a
              className={classNames(
                "text-gray-500 font-medium hover:text-blue-500",
                {
                  "!text-blue-500": currentPath === menu.path.slice(1),
                },
              )}
              href={menu.path}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>

      <button className="md:hidden cursor-pointer" onClick={handleClickBars}>
        <Bars />
      </button>
    </>
  );
};

export default NavbarLinks;
