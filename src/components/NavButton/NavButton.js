import React from "react";
import "./navButtons.css";
import PropTypes from 'prop-types';


export const NavButton = ({ Icon, texto, selecionado, definirSelecionado, id }) => {
  const handleDivClick = (e, id) => {
    e.preventDefault();
    definirSelecionado(id);
  };

  const buttonClass = `nav-icons${selecionado ? ` selecionado` : ''}`;
  const divClass = `nav-text${selecionado ? ` selecionado` : ''}`;

  return (
    <button className={buttonClass} onClick={(e) => handleDivClick(e, id)}>
      {Icon}
      <div className={divClass}>{texto}</div>
    </button>
  );
};

NavButton.prototype = {
  Icon: PropTypes.object.isRequired,
  texto: PropTypes.string.isRequired,
  selecionado: PropTypes.bool.isRequired,
  definirSelecionado: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

