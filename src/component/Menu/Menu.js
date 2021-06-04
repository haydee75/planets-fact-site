import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = props.datas.map((data) => (
    <NavLink
      onClick={() => setToggleMenu(!toggleMenu)}
      className={data.name}
      to={"/planet/" + data.name}
      key={data.name}
    >
      {data.name}
    </NavLink>
  ));
  return (
    <header className={toggleMenu ? "Menu menu-visible" : " Menu menu-hidden"}>
      <h2 className="title">
        The planets
        <span className="logo-svg" onClick={() => setToggleMenu(!toggleMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </span>
      </h2>
      <nav className={toggleMenu ? "items menu-visible" : " items menu-hidden"}>
        {links}
      </nav>
    </header>
  );
};

export default Menu;
