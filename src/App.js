import React from "react";
// components
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import LocationList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import {Navbar,DIV} from "./components/Style.js";
import {Route, NavLink, Switch} from 'react-router-dom';



export default function App() {
  return (
    <div>

      <Navbar>
        <DIV>
      <Header />
      </DIV>
      <DIV>
          <NavLink to='/'>Welcome</NavLink>
          <NavLink to='/character-list'>Character List</NavLink>
          <NavLink to='/location-list'>Location List</NavLink>
          <NavLink to='/episode-list'>Episode List</NavLink>
          <NavLink to='/search-form'>Search Characters</NavLink>
          </DIV>
          </Navbar>




      <Switch>
      <Route path='/character-list'>
          <CharacterList />
        </Route>
        <Route path='/location-list'>
          <LocationList />
        </Route>
        <Route path='/episode-list'>
          <EpisodeList />
        </Route>
        <Route path='/search-form'>
          <SearchForm />
        </Route>
        <Route path='/'>
          <WelcomePage />
        </Route>
      </Switch>

    </div>
  );
}
