import React, { Component, useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getUserProfile } from "../data/queries";
import {
  Get_User_ProfileQuery,
  Get_User_ProfileQueryVariables
} from "../generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faClock,
  faSearch,
  faSortAmountDown
} from "@fortawesome/free-solid-svg-icons";

const StarredList: React.StatelessComponent = () => {

  const { loading, error, data } = useQuery<
    Get_User_ProfileQuery,
    Get_User_ProfileQueryVariables
  >(getUserProfile);

  var all_users = data? data.User : [];
  const [users, setUsers] = useState(all_users);

  useEffect( ()=>{ setUsers(all_users) }, [all_users] );
  // handle loading
  if (loading) {
    return <div>loading...</div>;
  }

  // handle error
  if (error || !data) {
    console.log(error);
    return <div>error!</div>;
  }

  /* setUsers(all_users); */
  var filtertext = "";

  // For demo: just display all users from database
  // TODO: only display starred contacts for current (logged in) user

  const handleChange = (e: any)=> {
    filtertext = e.target.value;
    if(filtertext!=""){
      setUsers( all_users.filter(function(u){ return u.first_name.includes(filtertext); }) ) ;
    }
    else{
      setUsers(all_users);
    }
  }

  // Style variables
  const dark_color = "#333333";
  const light_color = "#555555";
  const main_gradient =
    "linear-gradient(124deg, rgba(46,207,185,1) 0%, rgba(55,213,230,1) 100%)";
  const main_color = "#2ecfb9";
  const accent_color = "#37d5e6";
  const shadow_color = "#c9d4d6";
  const entry_height = 100;
  const profile_pic_size = 55;
  const profile_pic_margin = 7;
  const action_button_size = 40;
  const action_margin_right = 7;

  return (
    <div className="list-container">
      <div
        className="top-bar"
        style={{
          height: "140px",
          background: `${main_gradient}`,
          boxShadow: `0 5px 10px ${shadow_color}`
        }}
      >
        <input
          type="text"
          className="input"
          id="search-input"
          placeholder="Search..."
          onChange={handleChange}
        <div
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: "30px",
            textAlign: "center",
            padding: "30px 0 20px 0",
            letterSpacing: "2px"
          }}
        >
          CONTACTS
        </div>
        <div
          className="search-bar"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <button id="search-btn" style={{ marginRight: "5px" }}>
            <FontAwesomeIcon
              icon={faSortAmountDown}
              style={{ display: "block", fontSize: "22px", color: "white" }}
            />
          </button>
          <input
            type="text"
            className="input"
            id="search-input"
            placeholder="Search..."
            style={{
              width: "65%",
              padding: "7px 12px",
              fontSize: "18px",
              border: "none",
              borderRadius: "5px"
            }}
          />
          <button id="search-btn" style={{ marginLeft: "5px" }}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ display: "block", fontSize: "22px", color: "white" }}
            />
          </button>
        </div>
      </div>
      <p
        id="search-info"
        style={{
          textAlign: "center",
          display: "show",
          color: `${light_color}`,
          margin: "20px 0 25px 0"
        }}
      >
        — {users.length} result found for "Kevin" —
      </p>
      {users.map(user => (
        <div
          className="user-entry"
          style={{
            display: "flex",
            margin: "10px 5px",
            padding: "10px 5px",
            height: `${entry_height}px`,
            borderRadius: "10px",
            backgroundColor: "rgba(256, 256, 256, 0.9)",
            boxShadow: `0 0 10px ${shadow_color}`
          }}
        >
          <div
            className="user-entry-pic"
            style={{
              float: "left",
              margin: "0 3px"
            }}
          >
            <div
              className="profile-pic"
              style={{
                backgroundImage: `url(${user.profile_picture})`,
                backgroundSize: `cover`,
                margin: `${profile_pic_margin}px`,
                height: `${profile_pic_size}px`,
                width: `${profile_pic_size}px`,
                borderRadius: `${profile_pic_size / 2}px`
              }}
            ></div>
          </div>
          <div className="user-entry-info" style={{ display: "inline-block" }}>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: `${dark_color}`
              }}
            >
              {user.first_name} {user.last_name}
            </div>
            <div style={{ fontSize: "14px", color: `${light_color}` }}>
              {user.company}
            </div>
            <div style={{ fontSize: "14px", color: `${light_color}` }}>
              {user.title}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: `${light_color}`,
                opacity: 0.7,
                fontStyle: "italic",
                marginTop: "3px"
              }}
            >
              — met [duration] ago at [location]
              {/* — met ${time_passed(user.met_time)} ago at ${user.met_location}. */}
            </div>
          </div>
          <div
            className="user-entry-actions"
            style={{
              float: "right",
              height: `${entry_height}px`,
              display: "flex",
              justifyContent: "right",
              marginTop: "3px"
            }}
          >
            <button
              className="note-action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                marginRight: `${action_margin_right}px`,
                height: `${action_button_size}px`,
                width: `${action_button_size}px`,
                backgroundColor: "rgba(46, 207, 185, 0.2)",
                borderRadius: `${action_button_size / 2}px`,
              }}
            >
              <FontAwesomeIcon
                icon={faStickyNote}
                style={{
                  display: "block",
                  fontSize: "20px",
                  color: `${main_color}`
                }}
              />
            </button>
            <button
              className="schedule-action"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                marginRight: `${action_margin_right}px`,
                height: `${action_button_size}px`,
                width: `${action_button_size}px`,
                backgroundColor: "rgba(55, 213, 230, 0.2)",
                borderRadius: `${action_button_size / 2}px`,
              }}
            >
              <FontAwesomeIcon
                icon={faClock}
                style={{
                  display: "block",
                  fontSize: "20px",
                  color: `${accent_color}`
                }}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarredList;
