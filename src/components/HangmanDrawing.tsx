import style from './HangmanDrawing.module.css';

const Head = (
  <div key="head" className={style["man-head"]}></div>
);

const Body = (
  <div key="body" className={style["man-body"]}></div>
);

const RightArm = (
  <div key="rightArm" className={style["man-arm__right"]}></div>
);

const LeftArm = (
  <div key="leftArm" className={style["man-arm__left"]}></div>
);

const RightLeg = (
  <div key="rightLeg" className={style["man-leg__right"]}></div>
);

const LeftLeg = (
  <div key="leftLeg" className={style["man-leg__left"]}></div>
);

const BodyPart = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg];

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className={style.hang}>
      {BodyPart.slice(0, numberOfGuesses)}
      <div className={style["hang-rope"]}></div>
      <div className={style["hang-reach"]}></div>
      <div className={style["hang-pole"]}></div>
      <div className={style["hang-stand"]}></div>
    </div>
  );
};

export default HangmanDrawing;