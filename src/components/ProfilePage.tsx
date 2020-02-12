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
    company
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
          {logo_image_url && <img src={logo_image_url} alt="company logo" />}
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
