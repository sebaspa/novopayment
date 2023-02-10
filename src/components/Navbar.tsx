import { useEffect, useState } from "react";
import customFetch from "../utils/axios";
import axios from "axios";
import { converObjectToArray } from "../utils/utils";

export const Navbar = () => {
  const [optionsMenu, setOptionsMenu] = useState([]);

  const OPTIONS_MAP = {
    undefined: "Texto vacío",
    card_list: "Lista de tarjetas",
    pays_transfer: "Transferencias y pagos",
    support: "Atención al cliente",
    enterprises: "Empresas",
    between_cards: "Entre tarjetas",
    banks: "Cuenta bancaria",
    credit_card: "Tarjetas de crédito",
    lock: "Bloqueos",
    change_pass: "Cambio de contraseña",
    visa: "Visa",
    master_card: "Master card"
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    customFetch
      .get("", { cancelToken: cancelToken.token })
      .then((res) => {
        setOptionsMenu(converObjectToArray(res.data.data.list[0]));
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.error(err);
        }
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  const optionsItems = optionsMenu.map((option) => {
    return (
      <li className="menu__li group" key={option?.name<string>}>
        {OPTIONS_MAP[option.name]}
        {option.options[0] && (
          <ul className="submenu group-hover:block">
            {converObjectToArray(option?.options[0]).map((suboption) => {
              return <li className="submenu__li group/submenu" key={suboption.name}>
                {OPTIONS_MAP[suboption.name]}
                {suboption.options[0] && (
                  <ul className="submenu-right group-hover/submenu:block">
                    {
                      converObjectToArray(suboption?.options[0]).map(suboption => {
                        return <li className="submenu__li" key={suboption.name}>{OPTIONS_MAP[suboption.name]}</li>
                      })
                    }
                  </ul>
                )}
                </li>;
            })}
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
      <ul className="flex gap-4 menu__ul">
        {optionsItems}
      </ul>
    </nav>
  );
};
