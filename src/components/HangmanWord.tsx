import style from './HangmanWord.module.css';

type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
}

const HangmanWord = ({ guessedLetters, wordToGuess, reveal = false } : HangmanWordProps) => {
    return (
      <div className={style.container}>
        {wordToGuess.split("").map((letter, index) => (
            <span
                className={style.guess}
                key={letter+index}
            >
                <span 
                    className={guessedLetters.includes(letter) || reveal ? style["guess-right"] : style["guess-wrong"]}
                    style={{ color: !guessedLetters.includes(letter) && reveal ? "red" : "black" }}
                >
                    {letter}
                </span>
            </span>
        ))}
      </div>
    );
  };
  
  export default HangmanWord;