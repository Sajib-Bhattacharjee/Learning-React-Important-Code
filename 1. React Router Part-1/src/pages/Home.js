import React from "react";

const Home = () => {
  return (
    <div>
      <h2 className="for__h2">Home Page</h2>
      <nav>
        <ul>
          <li>
            <a href="/"> Home </a>
          </li>
          <li>
            <a href="/about"> About </a>
          </li>
          <li>
            <a href="/contact"> Contact </a>
          </li>
          <li>
            <a href="/registration"> Registration </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
