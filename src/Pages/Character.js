import { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
import '../Components/character.css';

const Home = (props) => {
  const [character, setCharacter] = useState(null);
  const questions = [
    { question: 'What do they call you', a1: 'jphnny', a2: 'bom', a3: 'uyg' },
    { question: ' How long does it take you to drink a cup of water?' },
    { question: 'If you had to choose between golf or football...sludge?' },
    {
      question:
        'last question....What is 10 morglor, zinfied to the nearest gelop?'
    }
  ];
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
      <div id="questions">
        {/* <form onSubmit={onSubmit}>
          <label>
            <h1>I'm pickle Rick! Who are you?</h1>
            <br />
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </div>
      {character ? (
        <div id="q1">
          {"What's your name?"}
          <button id="questionBtn"> submit</button>
          <input></input>
          <div id="q2">
            {'How long does it take you to drink a cup of water?'}
            <div id="q3">
              <input></input>
              {'If you had to choose between golf or football...sludge?'}
              <div id="q4">
                <input></input>
                <div id="q5">
                  <input></input>
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
        </div>
      ) : null}
    </div>
  );
};
export default Home;
