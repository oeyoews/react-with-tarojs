import React, { useState } from "react";
import { Button } from "@antmjs/vantui";

/**
 * Add count button
 *
 * @return {*}
 */
const Count = () => {
  // click handler for counter

  const [count, setCount] = useState(0);
  const [log, setLog] = useState({
    logTime: "logtime",
    logMessage: "logmessage",
  });

  const clickHandler = () => {
    console.log(`before is ${count}`);
    setCount(count + 1);
    console.log(`after is ${count}`);
    setLog({ logTime: "2022", logMessage: "hi" });
    console.log(`log is ${log.logTime} ${log.logMessage}`);
  };
  const buttonClasses =
    "m-2 rounded border-none bg-red-200 p-2 duration-200 hover:scale-105 hover:bg-red-300";

  return (
    <>
      <Button
        type="warning"
        plain
        hairline
        onClick={clickHandler} // this setVariable is async, not realtime
        // className={buttonClasses}
      >
        ^_^ Click 🍨 {count}
      </Button>
      <Button
        type="primary"
        onClick={clickHandler} // this setVariable is async, not realtime
        className="m-2 rounded border-none bg-red-200 p-2 duration-200 hover:scale-105 hover:bg-red-300"
      >
        ^_^ Click 🍨 {count}
      </Button>
      <Button
        type="info"
        plain
        onClick={() => setCount(0)}
        className={buttonClasses}
      >
        Reset
      </Button>
    </>
  );
};

export default Count;
