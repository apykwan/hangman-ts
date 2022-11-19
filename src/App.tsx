import { useState, useEffect, useCallback } from 'react'

import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import words from './data/wordList.json';
import style from './App.module.css';

const getWord = () => words[Math.floor(Math.random() * words.length)];

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters(cur => [...cur, letter]);
  }, [guessedLetters, isWinner, isLoser]);

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
  
  // refresh with enter key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style["lose-or-win"]}>
        {isWinner && <h3>Winner! Refresh to try again</h3>}
        {isLoser && <h3>Nice Try! Refresh to try again</h3>}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord 
        guessedLetters={guessedLetters} 
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div className={style.keyboard}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} 
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter} 
        />
      </div>   
    </div>
  )
}

export default App
