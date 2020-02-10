import { gql } from "apollo-boost";

export const getUserProfile = gql`
  query GET_USER_PROFILE($profileHandle: String!) {
    User(where: { profile_handle: { _eq: $profileHandle } }) {
      id
      first_name
      last_name
      title
      company
      logo_image_url
    }
  }
`;
