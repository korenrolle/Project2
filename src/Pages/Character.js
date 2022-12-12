import { useState, useEffect } from 'react';
import '../Components/character.css';
import { Link } from 'react-router-dom';
// Image

const Character = () => {
  const [character, setCharacter] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible1, setIsVisible1] = useState(false);

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
  function randoCharacter() {
    let randomLength = arr.length;
    let randomArray = Math.floor(Math.random() * randomLength);
    return randomArray;
  }
  randoCharacter();

  async function fetchId() {
    let url = `https://rickandmortyapi.com/api/character/${randoCharacter()}`;
    let response = await fetch(url);

    let data = await response.json();
    setCharacter(data);
  }
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
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
    randoCharacter();
    if (clickCount === 3) {
      setIsVisible((current) => !current);
      setIsVisible1((current) => !current);
    }
  }
  useEffect(() => {
    fetchId();
  }, []);

  return (
    <div
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
      className="game"
    >
      <h2 id="innertext">What Character are You?</h2>
      <div id="questions">
        <div id="q1">
          {text}
          <form onSubmit={handleSubmit}>
            <input
              id="input"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <button
              className="btnStyle"
              disabled={name.length < 1}
              type="submit"
              onClick={handleClick}
            >
              <h2>submit</h2>
            </button>
          </form>
          <div
            id="char"
            style={{ visibility: isVisible1 ? 'visible' : 'hidden' }}
          >
            <img id="photo" src={character.image} alt="pic" />
            <h2>Name:{character.name}</h2>
            <h2>Character is a: {character.gender}</h2>
            <h2>{character.species}</h2>
            <h2>Character Classified as:{character.type}</h2>
            <h2>Character is still:{character.status}</h2>
            <Link to="/"> Start Over </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
