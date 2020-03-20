import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getUserProfile } from "../data/queries";
import {
  Get_User_ProfileQuery,
  Get_User_ProfileQueryVariables
} from "../generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faStopwatch,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const StarredList = () => {
  const { loading, error, data } = useQuery<
    Get_User_ProfileQuery,
    Get_User_ProfileQueryVariables
  >(getUserProfile);

  // handle loading
  if (loading) {
    return <div>loading...</div>;
  }

  // handle error
  if (error || !data) {
    console.log(error);
    return <div>error!</div>;
  }

  // For demo: just display all users from database
  // TODO: only display starred contacts for current (logged in) user
  const { User: users } = data;

  // Style variables
  const light_color = "#555555";
  const entry_height = 100;
  const profile_pic_size = 70;
  const profile_pic_margin = 7;
  const entry_margin_left = 10;
  const action_button_size = 40;
  const action_margin_right = 7;

  return (
    <div className="list-container">
      <div
        className="search-bar"
        style={{
          height: "70px",
          backgroundColor: "#AAAAAA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <input
          type="text"
          className="input"
          id="search-input"
          placeholder="Search..."
          style={{
            width: "70%",
            padding: "7px 12px",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px"
          }}
        />
        <button id="search-btn" style={{ marginLeft: "5px" }}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ display: "block", fontSize: "22px" }}
          />
        </button>
      </div>
      <p
        id="search-info"
        style={{
          textAlign: "center",
          display: "show",
          color: `${light_color}`
        }}
      >
        — 1 result found for "Kevin" —
      </p>
      {users.map(user => (
        <div
          className="user-entry"
          style={{ margin: "10px 0", height: `${entry_height}px` }}
        >
          <div
            className="user-entry-pic"
            style={{
              float: "left",
              marginLeft: `${entry_margin_left}px`
            }}
          >
            <div
              className="profile-pic"
              style={{
                background: `url(${user.profile_picture}) gray`,
                backgroundSize: "cover",
                margin: `${profile_pic_margin}px`,
                height: `${profile_pic_size}px`,
                width: `${profile_pic_size}px`,
                borderRadius: `${profile_pic_size / 2}px`
              }}
            ></div>
          </div>
          <div className="user-entry-info" style={{ display: "inline-block" }}>
            <p style={{ fontSize: "24px", margin: "0", fontWeight: "bold" }}>
              {user.first_name} {user.last_name}
            </p>
            <div className="company">
              <p style={{ fontSize: "14px", color: `${light_color}` }}>
                {user.company}
              </p>
              <p style={{ fontSize: "12px", color: `${light_color}` }}>
                {user.title}
              </p>
            </div>
          </div>
          <div
            className="user-entry-actions"
            style={{
              float: "right",
              height: `${entry_height}px`,
              display: "flex",
              justifyContent: "right",
              alignItems: "center"
            }}
          >
            <div
              className="note-action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "solid 1px black",
                marginRight: `${action_margin_right}px`,
                height: `${action_button_size}px`,
                width: `${action_button_size}px`,
                borderRadius: `${action_button_size / 2}px`
              }}
            >
              <FontAwesomeIcon
                icon={faStickyNote}
                style={{ display: "block", fontSize: "20px" }}
              />
            </div>
            <div
              className="schedule-action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "solid 1px black",
                marginRight: `${action_margin_right}px`,
                height: `${action_button_size}px`,
                width: `${action_button_size}px`,
                borderRadius: `${action_button_size / 2}px`
              }}
            >
              <FontAwesomeIcon
                icon={faStopwatch}
                style={{ display: "block", fontSize: "20px" }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarredList;
