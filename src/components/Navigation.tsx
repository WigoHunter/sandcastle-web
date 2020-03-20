import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faAddressBook,
  faStickyNote,
  faStopwatch
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = (props: RouteComponentProps) => {
  const {
    location: { pathname }
  } = props;

  return (
    <div className="nav">
      <Link
        to="/profile/kevin"
        className={`${pathname.startsWith("/profile") && "active"}`}
      >
        <FontAwesomeIcon icon={faUserCircle} />
      </Link>

      <Link
        to="/list"
        className={`${pathname.startsWith("/list") && "active"}`}
      >
        <FontAwesomeIcon icon={faAddressBook} />
      </Link>

      <Link
        to="/notes"
        className={`${pathname.startsWith("/notes") && "active"}`}
      >
        <FontAwesomeIcon icon={faStickyNote} />
      </Link>

      <Link
        to="/reminders"
        className={`${pathname.startsWith("/reminders") && "active"}`}
      >
        <FontAwesomeIcon icon={faStopwatch} />
      </Link>
    </div>
  );
};

export default withRouter(Navigation);
