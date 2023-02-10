import { useEffect, useState } from "react";

import customFetch from "../utils/axios";
import { converObjectToArray, getOptionName } from "../utils/utils";
import { Option } from "../types";

export const Navbar: () => JSX.Element = () => {
  const [optionsMenu, setOptionsMenu] = useState([]);

  useEffect(() => {
    customFetch
      .get("")
      .then((res) => {
        setOptionsMenu(converObjectToArray(res.data.data.list[0]));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const optionsItems: JSX.Element[] = optionsMenu.map((option: Option) => {
    return (
      <li className="menu__li group" key={option.name}>
        {getOptionName(option?.name)}
        {option.options[0] && (
          <ul className="submenu group-hover:block">
            {converObjectToArray(option?.options[0]).map(
              (suboption: Option) => {
                return (
                  <li
                    className="submenu__li group/submenu"
                    key={suboption.name}
                  >
                    {getOptionName(suboption?.name)}
                    {suboption.options[0] && (
                      <ul className="submenu-right group-hover/submenu:block">
                        {converObjectToArray(suboption?.options[0]).map(
                          (suboption: Option) => {
                            return (
                              <li className="submenu__li" key={suboption.name}>
                                {getOptionName(suboption?.name)}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    )}
                  </li>
                );
              }
            )}
          </ul>
        )}
      </li>
    );
  });

  return (
    <nav
      role="nav"
      className="hidden md:block bg-white w-full px-4 menu shadow-md"
    >
      <ul className="flex gap-4 menu__ul">{optionsItems}</ul>
    </nav>
  );
};
