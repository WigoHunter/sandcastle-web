import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faAddressBook,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="nav">
    <Link to="/profile/kevin">
      <FontAwesomeIcon icon={faUserCircle} />
    </Link>

    <Link to="/list">
      <FontAwesomeIcon icon={faAddressBook} />
    </Link>

    <Link to="/notes">
      <FontAwesomeIcon icon={faStickyNote} />
    </Link>
  </div>
);

export default Navigation;
