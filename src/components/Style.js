// import React from 'react';
import styled from 'styled-components';
// import { Navbar, NavItem, Nav, NavbarText } from 'reactstrap';
export const global = styled.html `
color:white;
`;
export const CardContainer = styled.div `
        background:rgba(0,0,0,.8);
        display:flex;
        width:60vw;
        flex-direction:column;
        box-shadow: 0px 1px 18px 3px rgba(0,0,0,0.77);

        border-radius:8px;
        align-self:center;
        justify-content:space-around;
        margin-left:15vw;
        padding:50px;
        padding-top:100px;
        border:5px inset black;

`;


export const CardImgC = styled.div `
      width:25vw;
      max-height:40vh;
      padding:2px;
`;

export const Cards = styled.div `
        top:55px;
        padding:80px;
        background:rgba(0,0,0,.8);
        position:relative;
        display:flex;
        width:60vw;
        margin-left:15vw;
        height:70vh;
        border-radius:8px;
`;

export const CardTitle = styled.h1 `
position:absolute:
    font-size:2.25rem;
    width:40vw;
    height:10vh;
    top:150px;
    color:black;
    border-radius:8px;
    padding:5px;
    text-align:left;
    text-shadow: 0px 1px 10px rgba(150,150,150,0.77);

`;

export const CardText = styled.h2 `
    font-size:1.5rem;
    width:30vw;
    margin:0;
    padding:2px;
    border-radius:8px;
    padding:3px;
    align-items:flex-start;
    text-align:left;
    color:yellow;
      text-shadow: 0px 1px 10px rgba(150,150,150,0.77);

`;

export const Navbar = styled.div `
        position:fixed;
        z-index:1000;
        width:60vw;
        height:15vh;
        background:rgba(0,0,55,.75);
        display:flex;
        flex-direction:column;
        color:orange;
        margin-left:15vw;
        justify-content:space-between;
        box-shadow:2px 1px 15px 1px gray;
        font-size:20px;
        text-shadow: 0px 1px 10px rgba(150,150,150,0.77);
        justify-content:space-around;
`;

export const A_Nav = styled.a `
    margin-top:15px;
    text-shadow: 0px 1px 20px rgba(150,150,150,0.77);
`;


export const Nav_Link = styled.div `
      padding:15px;
      display:flex;
      justify-content:space-around;
      margin:10px;
      width:40vw;
      box-shadow: 0px 1px 10px rgba(150,150,150,0.77);
      color:orange;
      border:2px ridge gray;
      z-index:20;
`;


export const MainDiv = styled.div `
    display:flex;
    flex-direction:column;
`;

export const StyledDiv = styled.div `
        position:relative;
        top:0px;
        margin-top:10px;
        padding:25px;
        margin-left:20%;
        display:flex;

        justify-items:center;
`;

export const DIV = styled.div `
        display:flex;
        justify-content:space-around;
       width:60vw;
`;
