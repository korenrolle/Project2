import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import '../Components/character.css';

const Home = (props) => {
  const [character, setCharacter] = useState(null);
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ];

  function randoCharacter() {
    let randomLength = arr.length;

    let randomArray = Math.floor(Math.random() * randomLength);
    return randomArray;
  }
  console.log(randoCharacter());

  async function fetchId() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${randoCharacter()}`
      );
      const characterData = await response.json();
      console.log(characterData);

      setCharacter(characterData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchId();
  }, []);

  return (
    <div className="game">
      {character ? (
        <>
          <img src={character.image} alt="quote" />
          <h2>Name:{character.name}</h2>
          <h2>Character was Created:{character.created}</h2>
          <h2>Character is a: {character.gender}</h2>
          <h2>{character.species}</h2>
          <h2>Character Classified as:{character.type}</h2>
          <h2>Character is still:{character.status}</h2>
          <h2>Location:{character.location.name}</h2>
        </>
      ) : null}
    </div>
  );
};
export default Home;
