import { useEffect, useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";

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
              <img src="https://rickandmortyapi.com/api/character/avatar/267.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/462.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/465.jpeg">
                {" "}
              </img>
              <img src="https://rickandmortyapi.com/api/character/avatar/481.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/601.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/402.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/736.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/74.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/250.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/18.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/738.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/40.jpeg"></img>
              <img src="https://rickandmortyapi.com/api/character/avatar/234.jpeg"></img>
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
