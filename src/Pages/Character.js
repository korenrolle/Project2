import { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
import '../Components/character.css';

const Home = (props) => {
  const [character, setCharacter] = useState(null);

  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
  ];
  console.log();

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
      const subbtn = document.getElementById('questionbtn');

      setCharacter(characterData);
    } catch (err) {
      console.log(err);
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchId();
  }, []);

  return (
    <div className="game">
      <div id="questions"></div>
      {/* <div id="questionRick">
        <img src={myGif} alt="my-gif" />
      </div> */}
      {character ? (
        <div id="q1">
          {<h2>"What's your name?"</h2>}
          <input></input>
          <div id="q2">
            {<h2>'How long does it take you to drink a cup of water?'</h2>}
            <input></input>
            <div id="q3">
              {<h2>"What is 10 Morglorp, zenfied to the nearest Gelop?"</h2>}
              <input></input>
              {}
              <div id="q4">
                <h2>
                  'If you had to choose between golf or football...sludge?'
                </h2>
                <input></input>
                <button id="questionBtn"> submit</button>
                <div id="char">
                  <img src={character.image} alt="quote" />
                  <h2>Name:{character.name}</h2>
                  <h2>Character was Created:{character.created}</h2>
                  <h2>Character is a: {character.gender}</h2>
                  <h2>{character.species}</h2>
                  <h2>Character Classified as:{character.type}</h2>
                  <h2>Character is still:{character.status}</h2>
                  <h2>Location:{character.location.name}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Home;
