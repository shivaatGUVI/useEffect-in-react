import { useState } from "react";
import Form from "../components/Form";

export default function Mounting() {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      {show && <Form />}
      <button onClick={clickHandler}>Show</button>
    </div>
  );
}
