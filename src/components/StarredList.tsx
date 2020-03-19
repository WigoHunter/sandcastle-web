import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getUserProfile } from "../data/queries";
import {
  Get_User_ProfileQuery,
  Get_User_ProfileQueryVariables
} from "../generated/graphql";

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
  const profile_pic_size = 70; //px, circle diameter
  const entry_left_margin = 10; //px
  const action_button_size = 50; //px, circle diameter
  const action_right_padding = 7; //px

  return (
    <div className="list-container">
      {users.map(user => (
        <div className="user-entry">
          <div
            className="user-entry-pic"
            style={{
              display: "inline-block",
              marginLeft: `${entry_left_margin}px`
            }}
          >
            <div
              className="profile-pic"
              style={{
                background: `url(${user.profile_picture}) gray`,
                backgroundSize: "cover",
                height: `${profile_pic_size}px`,
                width: `${profile_pic_size}px`,
                borderRadius: `${profile_pic_size / 2}px`
              }}
            ></div>
          </div>
          <div className="user-entry-info" style={{ display: "inline-block" }}>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <div className="company">
              <h6>{user.company}</h6>
              <p>{user.title}</p>
            </div>
          </div>
          <div
            className="user-entry-actions"
            style={{ display: "inline-block" }}
          >
            <div
              className="schedule-action"
              style={{
                background: `url(${user.profile_picture}) gray`,
                backgroundSize: "cover",
                height: `${action_button_size}px`,
                width: `${action_button_size}px`,
                borderRadius: `${action_button_size / 2}px`
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarredList;
