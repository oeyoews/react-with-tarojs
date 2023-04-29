import React, { useState, useEffect } from "react";
import { Button } from "@antmjs/vantui";

const TestDemo = () => {
  const [number, setNumber] = useState(0);

  //   useEffect(() => {
  //     console.log("effect runs");
  //     return () => {
  //       console.log("You should clean you effect before run");
  //       console.log("Ok, you can run");
  //     };
  //   });

  // maybe need cleanup function
  useEffect(() => {
    const testInterval = setInterval(() => {
      setNumber((pre) => pre + 1);
    }, 1000);
    return () => {
      clearInterval(testInterval);
    };
  }, []);

  const clickHandler = () => {
    setNumber(number + 1);
    console.log(`🇹🇦 `);
    console.log("number", number);
    document.title = `${number}`;
  };

  // this order not fixed if with useEffect
  // event trigger clickHandler, this useeffect also be trigger after this event
  // if you add second params as a empty array, this function just run one times, if have number var, that standard only this number changed this effect function run, this second apram is dependency parmas
  useEffect(() => {
    console.log("Effect 🛩 ");
    console.log("number", number);
    document.title = `Test components ${number}`;
    console.log("clicked");
  }, []);

  return (
    <>
      <Button type="info" plain onClick={clickHandler}>
        You click {number} times!
      </Button>
    </>
  );
};

export default TestDemo;
