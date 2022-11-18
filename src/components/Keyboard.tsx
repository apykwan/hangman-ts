import alphabet from '../data/alphabet.json';
import style from './Keyboard.module.css';

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
}

const Keyboard = ({ addGuessedLetter }: KeyboardProps ) => {

  return (
    <div className={style.container}>
      {alphabet.map((key, index) => (
        <button
          className={`${style.btn} ${style.inactive}`} 
          key={`${key}__${index}`}
          onClick={addGuessedLetter.bind(null, key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;