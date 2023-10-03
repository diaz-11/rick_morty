import { useEffect, useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import "./App.css";

export function Characters() {
  const { getAllCharacter, characters, getSingleCharacter } = useCharacter();

  useEffect(() => {
    getAllCharacter();
  }, []);
  return (
    <>
      <ul>
        {characters.map((item, index) => (
          <div className="todo" key={index}>
            <article className="gris">
              <img src={item.image}></img>
              <div className="personajes">
                <h2> {item.name}</h2>
                <h4 key={index}>
                  {item.status} - {item.species}
                </h4>
                <p>ultima localización conocida </p>
                <h3>{item.location.name}</h3>
                <p>visto por primera vez</p>
                <h3>{item.origin.name}</h3>
              </div>
            </article>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Characters;
