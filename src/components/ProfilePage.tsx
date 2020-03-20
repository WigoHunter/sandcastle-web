import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { getUserProfile } from "../data/queries";
import {
  Get_User_ProfileQuery,
  Get_User_ProfileQueryVariables
} from "../generated/graphql";

const ProfilePage = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery<
    Get_User_ProfileQuery,
    Get_User_ProfileQueryVariables
  >(getUserProfile, {
    variables: {
      profileHandle: id || ""
    }
  });

  // handle loading
  if (loading) {
    return <div>loading...</div>;
  }

  // handle error
  if (error || !data) {
    console.log(error);
    return <div>error!</div>;
  }

  // handle cases where user cannot be found or multiple users are returned (shouldn't happen)
  const { User: users } = data;
  if (users.length !== 1) {
    return <div>can't find the user</div>;
  }

  const {
    cover_picture,
    profile_picture,
    first_name,
    last_name,
    logo_image_url,
    address,
    title,
    number,
    motto
  } = users[0];

  return (
    <div className="profile-page">
      <div
        className="cover"
        style={{
          background: `url(${cover_picture})`,
          backgroundSize: "cover",
          height: "40vh",
          width: "100vw"
        }}
      />
      {/* <div className="new-contact">New contact added!</div> */}
      <div className="profile-card">
        <div
          className="profile-pic"
          style={{
            background: `url(${profile_picture})`,
            backgroundSize: "cover",
            height: "70px",
            width: "70px"
          }}
        />
        <h2>
          {first_name} {last_name}
        </h2>

        <div className="company">
          {logo_image_url && (
            <div
              className="logo"
              style={{
                background: `url(${logo_image_url})`,
                backgroundSize: "cover",
                height: "28px",
                width: "68%"
              }}
            />
          )}
          <div className="line" />
          <p>{title}</p>
        </div>

        <div className="contact">
          <div>Address: {address}</div>
          <div>Mobile: {number}</div>
          {/* to fix */}
          <div>Email: kh736@cornell.edu</div>
        </div>

        <div className="linkedin-button">Connect on LinkedIn</div>
      </div>
      {/* <div className="motto">{motto}</div> */}
    </div>
  );
};

export default ProfilePage;
