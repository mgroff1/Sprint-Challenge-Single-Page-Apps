import React, { useState, useEffect } from "react";
import Axios from 'axios';
import CharacterCard from "./CharacterCard";
import {CardTitle,StyledDiv,CardContainer} from './Style';
import css from '../index.css'
////////////////////////////////////////////////////////////
export default function SearchForm(props) {
 const [searchTerm, setSearchTerm] = useState('');
 const [searchResults, setSearchResults] = useState([]);
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
 useEffect(() => {
  Axios.get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    console.log(res.data.results)
    const characters = res.data.results.filter(char =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
      setSearchResults(characters);
  })
  .catch(err => {
    console.log('No data to display', err);
  })
}, [searchTerm]);
 ////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////
 const handleChange = e => {
   console.log(e.target.value)
   setSearchTerm(e.target.value);
 };
///////////////////////////////////////////////////////
  return (
    <CardContainer>
      <div>
     <form>
    <div>
        <cardtitle htmlfor="name">Search for Character: </cardtitle>
        <input id="name" type="text" name="textfield" defaultValue="{searchTerm}" placeholder="Enter character name" onchange="{handleChange}" />
        <styleddiv>
          <ul>
            {searchResults.map((char, index) =&gt; {
            return <charactercard key="{index}" name="{char.name}" image="{char.image}" species="{char.species}" gender="{char.gender}">
              })}
            </charactercard></ul>
        </styleddiv>
      </div>

  );
}
