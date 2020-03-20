import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faClock, faTrash } from "@fortawesome/free-solid-svg-icons";

// to be replaced by graphql types
interface Props {
  name: string;
  image: string;
  note: string;
  date: string;
}

const Note = (props: Props) => {
  const { name, image, note, date } = props;

  return (
    <div className="note">
      <div
        className="pic"
        style={{
          width: "30px",
          height: "30px",
          background: `url(${image})`,
          backgroundSize: "cover"
        }}
      />
      <h3>{name}</h3>
      <p className="date">{date}</p>
      <p className="note-content">{note}</p>

      <div className="note-actions">
        <div className="action">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="action">
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className="action">
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default Note;
