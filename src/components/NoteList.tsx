import React from "react";
import Note from "./Note";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";

const fakeNotes = [
  {
    note: "Remember to ask Kevin about the partnership thing...",
    image:
      "https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/17155307_10211067554639097_6739106460818295766_n.jpg?_nc_cat=101&_nc_ohc=jVVUPubceZoAX8TkJzF&_nc_ht=scontent.fewr1-6.fna&oh=ff079c3582096ff7328c4ed883f961a3&oe=5EC1006C",
    name: "Kevin Hsu",
    date: "2020/03/18"
  },
  {
    note: "Um he owes me $50 dinner",
    image:
      "https://imgur.com/UUZo2Cw.png",
    name: "Brian Ho",
    date: "2020/03/17"
  },
  {
    note:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://imgur.com/wj9h2OW.png",
    name: "George Lin",
    date: "2020/03/17"
  }
];

const NoteList = () => (
  <div className="notes">
    <div className="top-bar">
      <div className="title">NOTES</div>
      <div className="line"></div>
    </div>
    <h4>Notes</h4>
    <div className="notes-list">
      {fakeNotes.map((note, i) => (
        <Note key={i} {...note} />
      ))}
    </div>
  </div>
);

export default NoteList;
