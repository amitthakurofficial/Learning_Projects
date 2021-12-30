import { useState } from "react";

export function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label for="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label for="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <button className="button-primary">Add user</button>
        </div>
      </div>
    </div>
  );
}