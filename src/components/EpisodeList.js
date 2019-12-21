import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import {CardContainer} from "./Style"
import css from '../index.css';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(res => {
      console.log(res.data.results)
      setEpisode(res.data.results)
    })
    .catch(err => {
      console.log('No data to display', err);
    })
  }, []);

  return (
<CardContainer>
    <section className="episode-list">
      {episode.map((epi, index) => {
        return <EpisodeCard
          key={index}
          name={epi.name}
          url={epi.url}
          air_date={epi.air_date}
          episode={epi.episode}
          />
      })}
    </section>
    </CardContainer>
  );
}
