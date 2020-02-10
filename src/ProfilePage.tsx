import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { getUserProfile } from "./data/queries";

const ProfilePage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(getUserProfile, {
    variables: {
      profileHandle: id
    }
  });

  // handle loading
  if (loading) {
    return <div>loading...</div>;
  }

  // handle error
  if (error) {
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
