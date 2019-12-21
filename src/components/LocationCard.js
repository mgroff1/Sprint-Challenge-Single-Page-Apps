import React from "react";
import {CardText,StyledDiv,CardContainer,CardTitle,Cards} from "./Style";
import {
  Card,
} from 'reactstrap';

export default function LocationCard(props) {
  const {name, dimension,type} = props;

  return (

        <Cards>
        <CardTitle>{name}</CardTitle>
          <CardText>{type}</CardText>
          <CardText>{dimension}</CardText>
        </Cards>


  );
}
