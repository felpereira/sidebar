import React from "react";
import "./NavBottom.css";

import { ReactComponent as Moon } from '../../svg/moon.svg';
import { ReactComponent as Toogle } from '../../svg/Toogle.svg';
import { ReactComponent as Logout } from '../../svg/Logout.svg';


export const NavBottom = () => {
  return (
    <div className={`nav-bottom`}>
      <div className={`darkmode`}>
        <Moon width={40} height={40} />
        <div className={`text-nav-botton`}>
          Dark Mode<Toogle width={50} height={50} />
        </div >

      </div>
      <div className={`nav-bottom-minimaze`}><Logout width={40} height={40} /></div>
      <button className={`buttonLogout`}>  <Logout width={33} height={33} /><div className={`buttonText`}>Logout</div></button>
    </div>
  );
};
