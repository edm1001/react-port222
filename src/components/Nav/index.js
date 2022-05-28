import React from "react";

function Nav(props) {
  const {
    setContactSelected,
  } = props;
//create nav bar for your stuff
  return (
    <header className="flex-row">
      <h1> <a href="/">Edmer Valencia</a></h1>
      <nav>
        <ul className="flex-row">

          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>About Me</a>
          </li>

          <li className="mx-2">
            <a href="#contact" onClick={() => setContactSelected(true)}>Contact</a>
          </li>

          <li className="mx-2">
            <a href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;