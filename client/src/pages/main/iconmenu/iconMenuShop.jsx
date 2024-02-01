import { Link } from "react-router-dom";

import React from "react";
import IconMenuContent from "./components/IconMenuContent";
import { useEffect, useState } from "react";

export default function IconMenu() {
  const [iconMenu, setIconMenu] = useState([]);
  useEffect(() => {
    fetch(`data/iconMenu/iconMenu.json`)
      .then((res) => res.json())
      .then((data) => {
          const iconMenuSlice = data.slice(29, 38);
          setIconMenu(iconMenuSlice);
      });
  }, []);

  return (
    <>
      <div className="iconMenu_inner_wrap inner">
        <div className="iconMenu iconMenuShop">
          {iconMenu.map((icon) => (
            <div key={icon.id}>
              <IconMenuContent image={icon.image} name={icon.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
