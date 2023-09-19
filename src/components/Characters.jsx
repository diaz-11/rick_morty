import { useEffect, useState } from "react";
import {}
export function characters() {
  const { characters, setcharacters } = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => console.log(data.results));
  }, []);
  return <>hola</>;

  <>
    {characters.map((item, index) => (
      <li>key={index}
        <h3>{item.name} </h3>
        <p>(item.status)</p>
        <img src={item.image}/>
      </li>
    ))}
  </>;
}
