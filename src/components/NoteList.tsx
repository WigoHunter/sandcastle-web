import React from "react";
import Note from "./Note";

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
      "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/89383283_3522271591177615_7711558916055760896_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=zGQeadFYBIEAX8H0ajt&_nc_ht=scontent-lga3-1.xx&oh=af4008e6aea3e4f0806a2410315bab94&oe=5E9A8069",
    name: "Brian",
    date: "2020/03/17"
  },
  {
    note:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/18738438_10208282747659679_799164071551895728_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=nSclFi8CQ-8AX85wG68&_nc_ht=scontent-lga3-1.xx&oh=a388da43ab68973c66c46c8b5af1d5f2&oe=5E9B49B8",
    name: "George Lin",
    date: "2020/03/17"
  }
];

const NoteList = () => (
  <div className="notelist">
    <h4>Notes</h4>
    {fakeNotes.map((note, i) => (
      <Note key={i} {...note} />
    ))}
  </div>
);

export default NoteList;
