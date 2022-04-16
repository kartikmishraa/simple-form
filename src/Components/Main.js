// Main component

import React from "react";

const Main = () => {
  return (
    <main>
      <form>
        <label>Full Name: </label>
        <input type="text" id="fname" placeholder="Your Name"></input>
        <br />
        <label>Email: </label>
        <input type="text" id="email" placeholder="Your Email"></input>
        <br />
        <label id="age">Age: </label>
        <input type={"number"} min="1" max="140" placeholder="Ex. 12"></input>
        <br />
        <div className="form--sub">
          <span>
            <label>Gender: </label>
            <select id="gender">
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
