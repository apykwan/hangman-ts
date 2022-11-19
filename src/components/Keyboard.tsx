import alphabet from '../data/alphabet.json';
import style from './Keyboard.module.css';

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  activeLetters: string [];
  inactiveLetters: string [];
  disabled: boolean;
}

const Keyboard = ({ addGuessedLetter, activeLetters, inactiveLetters, disabled = false }: KeyboardProps) => {

  return (
    <div className={style.container}>
      {alphabet.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            disabled={isInactive || isActive || disabled}
            className={`${style.btn} ${isActive ? style.active: ""} ${isInactive ? style.inactive: ""}`} 
            key={`${key}__${index}`}
            onClick={addGuessedLetter.bind(null, key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;