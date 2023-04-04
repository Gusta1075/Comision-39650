import { useState } from "react";
import CounterPresentation from "./CounterPresentation";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
    
    
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  const reiniciar = () => {
    setCounter(0);
  };

  return (
    <div>
      <CounterPresentation
        counter={counter}
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
      />
    </div>
  );
};
export default CounterContainer;
