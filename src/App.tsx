import { useState, useEffect } from 'react'

import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import words from './data/wordList.json';
import style from './App.module.css';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  
  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(cur => [...cur, letter]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, [guessedLetters]);

  return (
    <div className={style.container}>
      <div className={style["lose-or-win"]}>
        Lose
        Win
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div className={style.keyboard}>
        <Keyboard  addGuessedLetter={addGuessedLetter} />
      </div>   
    </div>
  )
}

export default App
