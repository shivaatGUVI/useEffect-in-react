import { useEffect, useState } from "react";

export default function UseEffect() {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("Mounting stage: UseEffect function is invoked");

    return () => {
      console.log("Unmounting stage: Clean up function is invoked");
    };
  }, []);

  const clickHandler = () => {
    setState(!state);
  };

  return (
    <div>
      <h1>{state ? "Yes" : "No"}</h1>
      <button onClick={clickHandler}>Change</button>
    </div>
  );
}
