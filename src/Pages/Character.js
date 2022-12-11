import { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
import '../Components/character.css';
// import Game from './Game';

const Character = () => {
  const [character, setCharacter] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
  ];
  const questions = [
    'Hey, What do they call you?',
    'How long does it take you to drink a cup of water?',
    'If you had to choose between golf or football...sludge?',
    'What is 10 Morglorp, zenfied to the nearest Gelop?'
  ];
  // console.log();

  // function reveal({ className = 'revealCharacter' }) {
  //   return (className = 'revealCharacter');
  // }
  function randoCharacter() {
    let randomLength = arr.length;
    let randomArray = Math.floor(Math.random() * randomLength);
    return randomArray;
  }
  console.log(randoCharacter());

  async function fetchId() {
    // try {
    //   const response = await fetch(
    //     `https://rickandmortyapi.com/api/character/${randoCharacter()}`
    //   );
    //   const characterData = await response.json();

    //   // const subbtn = document.getElementById('questionbtn');

    //   setCharacter(characterData);
    //   console.log(characterData);
    // } catch (err) {
    //   console.log(err);
    // }
    let url = `https://rickandmortyapi.com/api/character/${randoCharacter()}`;
    let response = await fetch(url);

    let data = await response.json(); // read
    setCharacter(data);
  }

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    console.log(`Form submitted, ${name}`);
  };
  const [i, incrementIndex] = useState(0);
  const [text, setText] = useState(`${questions[i]}`);
  const [clickCount, setClickCount] = useState(0);

  function handleClick(e) {
    setText(`${questions[i + 1]}`);
    incrementIndex(i + 1);
    e.stopPropagation();
    e.target.value = '';
    setClickCount(clickCount + 1);
    if (clickCount === 3) {
      setIsVisible((current) => !current);
      console.log("That's enough");
    }
  }

  //   return (
  //     <div className="newQuestions">
  //       {questions.map((question) => {
  //         return <div>{question}</div>;
  //       })}
  //     </div>
  //   );
  // };
  // console.log(question);

  useEffect(() => {
    fetchId();
  }, []);

  return (
    <div
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      className="game"
    >
      <h2 id="innertext">What Character are You?</h2>
      {/* <div id="questionRick"><img src={myGif} alt="my-gif" /> </div> */}
      <div id="questions">
        <div id="q1">
          {text}
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <button type="submit" onClick={handleClick}>
              submit
            </button>
          </form>
          <div id="char">
            <img id="photo" src={character.image} alt="quote" />
            <h2>Name:{character.name}</h2>
            <h2>Character was Created:{character.created}</h2>
            <h2>Character is a: {character.gender}</h2>
            <h2>{character.species}</h2>
            <h2>Character Classified as:{character.type}</h2>
            <h2>Character is still:{character.status}</h2>
            {/* <h2>Location:{character.location.name}</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
