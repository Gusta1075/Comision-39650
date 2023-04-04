const CounterPresentation = ({ sumar, counter, restar, reiniciar }) => {
    return (
      <div>
        <h1>Prueba el contador</h1>
        <button onClick={sumar}>Sumar</button>
        <h3>{counter}</h3>
        <button onClick={restar}>Restar</button>
        <button onClick={reiniciar}>Reiniciar Contador</button>
      </div>
    );
  };
  
  export default CounterPresentation;