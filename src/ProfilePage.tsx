import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { getUserProfile } from "./data/queries";
import {
  Get_User_ProfileQuery,
  Get_User_ProfileQueryVariables
} from "./generated/graphql";

const ProfilePage = () => {
  const { id } = useParams();

  if (!id) {
    return <div>no profile id detected</div>;
  }

  const { loading, error, data } = useQuery<
    Get_User_ProfileQuery,
    Get_User_ProfileQueryVariables
  >(getUserProfile, {
    variables: {
      profileHandle: id
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

  const user = users[0];

  return (
    <div>
      {user.first_name} {user.last_name}
    </div>
  );
};

export default ProfilePage;
