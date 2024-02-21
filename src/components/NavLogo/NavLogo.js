import React from "react";
import "./NavLogo.css";
import PropTypes from 'prop-types';


export const NavLogo = ({ Icon, texto, }) => {

  return (
    <div className={`brand`}>
      {Icon}
      <div className={`brand-title`}>
        {texto}
      </div>
    </div>
  );
};
NavLogo.prototype = {
  Icon: PropTypes.object.isRequired,
  texto: PropTypes.string.isRequired,

}

