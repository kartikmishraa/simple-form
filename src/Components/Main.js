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

  // function to handle Submit
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
          className="field"
          name="fname"
          type="text"
          value={inputs.fname}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <br />
        <label>Email: </label>
        <input
          className="field"
          name="email"
          type="email"
          value={inputs.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <br />
        <label>Age: </label>
        <input
          className="field"
          name="age"
          type="number"
          min="1"
          max="140"
          placeholder="Ex. 12"
          onChange={handleChange}
          required
        />
        <br />
        <span className="form--sub">
          <span>
            <label>Gender: </label>
            <select name="gender" value="Male" onChange={handleChange} required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </span>
          <button className="btn">SUBMIT</button>
        </span>
      </form>
    </main>
  );
};

export default Main;
