import { gql } from "apollo-boost";

export const getUserProfile = gql`
  query GET_USER_PROFILE($profileHandle: String!) {
    User(where: { profile_handle: { _eq: $profileHandle } }) {
      first_name
      last_name
      company
      title
      address
      logo_image_url
      number
      website_url
      linkedin_url
      facebook_url
      profile_picture
      motto
      cover_picture
      profile_handle
    }
  }
`;
