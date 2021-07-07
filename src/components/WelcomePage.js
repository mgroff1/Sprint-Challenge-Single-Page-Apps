import React from "react";
import {CardContainer,DIV,Cards} from "./Style"
// Styles
import css from '../index.css'

export default function WelcomePage() {
  return (
    <Cards>

      <DIV>
        <img
          className="img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
    </DIV>

    </Cards>
  );
}
