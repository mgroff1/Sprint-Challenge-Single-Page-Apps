import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";


export default function LocationList() {

  const [location, setLocation] = useState([]);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/location/')
    .then(res => {
      console.log(res.data.results)
      setLocation(res.data.results)
    })
    .catch(err => {
      console.log('No data to display', err);
    })
  }, []);

  return (
      <div>
    <section className="character-list">
      {location.map((loc, index) => {
        return <LocationCard
          key={index}
          name={loc.name}
          dimensions={loc.dimension}
          type={loc.type}

          />
      })}
    </section>
    </div>
  );
}
