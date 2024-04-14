import { useState } from "react";

let timeOut;
export default function Debouncing() {
  const [type, setType] = useState("");
  const [show, setShow] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setShow(false);
    setType("");
  };

  const inputHandler = (event) => {
    setShow(false);

    const value = event.target.value;
    setType(value);

    // Without debouncing
    setShow(true);
    console.log(value.length);

    // With debouncing
    clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      setShow(true);
      console.log(type);
      console.log(timeOut);
    }, 1000);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(inputEvent) => inputHandler(inputEvent)}
          type="text"
          placeholder="Type here"
          value={type}
        />
        <input type="submit" value="Search" />
      </form>

      <p>{show && type}</p>
    </div>
  );
}
