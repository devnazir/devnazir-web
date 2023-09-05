import { useState } from "react";
import { MENUS } from "../constants";
import Bars from "../icons/Bars";
import classNames from "../utils";

const NavbarLinks = (props: { currentPath: string }) => {
  const { currentPath } = props;
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
          <li className="inline-block text-xs md:text-sm">
            <a
              className={classNames(
                "text-gray-500 font-medium hover:text-purple-500",
                {
                  "text-purple-500": currentPath === menu.path.slice(1),
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