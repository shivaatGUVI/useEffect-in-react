import { useState } from "react";

const initialState = {
  fname: "",
  lname: "",
  email: "",
};
export default function Form() {
  const [form, setForm] = useState(initialState);

  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(submitEvent) => submitHandler(submitEvent)}>
        <input
          onChange={(inputEvent) => inputHandler(inputEvent)}
          value={form.fname}
          name="fname"
          type="text"
          placeholder="First name"
        />
        <input
          onChange={(inputEvent) => inputHandler(inputEvent)}
          value={form.lname}
          name="lname"
          type="text"
          placeholder="Enter name"
        />
        <input
          onChange={(inputEvent) => inputHandler(inputEvent)}
          value={form.email}
          name="email"
          type="email"
          placeholder="Last name"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
