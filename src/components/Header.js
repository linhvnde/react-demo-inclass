import { useState } from 'react';

export const Header = () => {


  //   function doSomething() {
  //     console.log('doing something...');
  //   }
    
  //     function doSomething(name) {
  //     console.log('doing something...',name);
  //   }

  // const [myVariable, setMyVariable] = useState(initialValue);
  const [counter, setCounter] = useState(0); //counter is the stateful value, 0 is initial value

  function increaseCounter() {
    // counter++; // NEVER MODIFY STATE DIRECTLY !!

    setCounter(counter + 1);//not using counter++ as react thinks the variable got modified

    console.log('new value for counter: ', counter);
  }
  return (
    <header>
      <h1>This is the header component</h1>
          <h2>Number of clicks: { counter}</h2>

      {/* <button onClick={doSomething}>Click</button> */}
      {/* <button onClick={()=>{
          doSomething(Alice)
          }}>Click</button> */}

      <button onClick={increaseCounter}>Click</button>
    </header>
  );
};
