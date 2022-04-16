// Main component

import React, { useState } from "react";
import db from "../firebase";

const Main = () => {
  // State variable to hold inputs to be sent to database
  const [inputs, setInputs] = useState({});

  // function to update state with input fields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  // function to handle Submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("form-data")
      .add(inputs)
      .then(() => {
        alert(`data sent to firestore`);
        setInputs({});
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>Full Name: </label>
        <input
          type="text"
          name="fname"
          value={inputs.fname}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <br />
        <label>Email: </label>
        <input
          name="email"
          type="text"
          value={inputs.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <br />
        <label>Age: </label>
        <input
          name="age"
          type="number"
          min="1"
          max="140"
          placeholder="Ex. 12"
          onChange={handleChange}
          required
        />
        <br />
        <div className="form--sub">
          <span>
            <label>Gender: </label>
            <select name="gender" onChange={handleChange} required>
              <option value="Select" selected>
                Select
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </span>
          <button>SUBMIT</button>
        </div>
      </form>
    </main>
  );
};

export default Main;
