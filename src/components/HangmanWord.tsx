import style from './HangmanWord.module.css';

type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
}

const HangmanWord = ({ guessedLetters, wordToGuess} : HangmanWordProps) => {
    return (
      <div className={style.container}>
        {wordToGuess.split("").map((letter, index) => (
            <span
                className={style.guess}
                key={letter+index}
            >
                <span 
                    className={guessedLetters.includes(letter) ? style["guess-right"] : style["guess-wrong"]}
                >
                    {letter}
                </span>
            </span>
        ))}
      </div>
    );
  };
  
  export default HangmanWord;