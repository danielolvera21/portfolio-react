import React from "react";

function Nav(props) {
  const {
    setContactSelected,
  } = props;

  return (
    <header className="flex-row">
      <h1> Daniel Olvera</h1>
      <nav>
        <ul className="flex-row">

          <li className="mx-2">
            <a href="#about" className="navcolor" onClick={() => setContactSelected(false)}>About Me</a>
          </li>

          <li className="mx-2">
            <a href="#contact" className="navcolor" onClick={() => setContactSelected(true)}>Contact</a>
          </li>

          <li className="mx-2">
            <a href="#portfolio" className="navcolor" onClick={() => setContactSelected(false)}>Portfolio</a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
