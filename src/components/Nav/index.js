import React from "react";

function Nav(props) {
  const {
    setContactSelected,
  } = props;
//create nav bar for your stuff
  return (
    <header className="flex-row">
      <h1> Edmer Valencia</h1>
      <nav>
        <ul className="flex-row">

          <li className="mx-2">
            <a href="#about" className="navcolor" onClick={() => setContactSelected(false)}>About Me</a>
          </li>

          <li className="mx-2">
            <a href="#contact" className="navcolor" onClick={() => setContactSelected(true)}>Contact</a>
          </li>

          <li className="mx-2">
            <a href="#project" className="navcolor" onClick={() => setContactSelected(false)}>Projects</a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;