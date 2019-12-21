import React from "react";
import {StyledDiv} from "./Style";
import {
  Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';

export default function CharacterCard(props) {
  const {name,url, air_date,episode} = props;

  return (
    <StyledDiv>
      <Card body outline color='secondary'>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{url}</CardText>

          <CardText>{air_date}</CardText>
          <CardText>{episode}</CardText>
        </CardBody>
      </Card>
    </StyledDiv>
  );
}
