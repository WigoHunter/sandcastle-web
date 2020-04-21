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
  faEllipsisH,
  faSortAmountDown
} from "@fortawesome/free-solid-svg-icons";
import { timeDiff } from "../utils";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";

const StarredList = () => {
  const { loading, error, data } = useQuery<
    Get_User_ProfileQuery,
    Get_User_ProfileQueryVariables
  >(getUserProfile);
  const [filter, setFilter] = useState("");

  // handle loading
  if (loading) {
    return <div>loading...</div>;
  }

  // handle error
  if (error || !data) {
    console.log(error);
    return <div>error!</div>;
  }

  // filter text
  const handleChange = (e: any) => {
    setFilter(e.target.value.toLowerCase());
  };

  // Style variables
  const profile_pic_size = 55;

  // For demo: just display all users from database
  // TODO: only display starred contacts for current (logged in) user
  const users =
    filter === ""
      ? data.User
      : data.User.filter(
          user =>
            user.first_name.toLowerCase().includes(filter) ||
            (user.met_location &&
              user.met_location.toLowerCase().includes(filter))
        );

  return (
    <div className="contacts">
      <div className="top-bar">
        <div className="title">CONTACTS</div>
        <div className="search-bar">
          {/* TODO: filter and sort options */}
          <div className="filter-icon">
            <FontAwesomeIcon icon={faSortAmountDown} />
          </div>
          <input
            type="text"
            className="input"
            id="search-input"
            placeholder="Search..."
            onChange={e => handleChange(e)}
          />
        </div>
      </div>
      <div className="contacts-list">
        {filter !== "" && (
          <p id="search-info">
            — {users.length} result{users.length === 1 ? "" : "s"} found for "
            {filter}" —
          </p>
        )}
        {users.map(user => (
          <div className="user-entry">
            <div className="user-data">
              <div className="user-entry-pic">
                <div
                  className="profile-pic"
                  style={{
                    backgroundColor: "gray",
                    backgroundImage: `url(${user.profile_picture})`,
                    backgroundSize: "cover",
                    height: `${profile_pic_size}px`,
                    width: `${profile_pic_size}px`,
                    borderRadius: "50%"
                  }}
                ></div>
              </div>
              <div className="user-entry-info">
                <div className="name">
                  {user.first_name} {user.last_name}
                </div>
                <div className="company">{user.company}</div>
                <div className="title">{user.title}</div>
              </div>
            </div>
            <div className="met">
              — met {timeDiff(new Date(), user.met_time)} at {user.met_location}
            </div>
            <div className="ellipsis-icon">
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarredList;
