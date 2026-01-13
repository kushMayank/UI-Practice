import { useState } from "react";

const DiceApp = () => {
  const [diceNumber, setDiceNumber] = useState(0);
  return (
    <>
      Number of Dice
      <input type="text" />
      <input type="button">Roll</input>
    </>
  );
};

export default DiceApp;

const Dice = () => {
  return <div></div>;
};
