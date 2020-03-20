import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamptz: any,
  uuid: any,
};

export type Mutation_Root = {
   __typename?: 'mutation_root',
  delete_User?: Maybe<User_Mutation_Response>,
  insert_User?: Maybe<User_Mutation_Response>,
  update_User?: Maybe<User_Mutation_Response>,
};


export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp
};


export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>
};


export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>,
  where: User_Bool_Exp
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
   __typename?: 'query_root',
  User: Array<User>,
  User_aggregate: User_Aggregate,
  User_by_pk?: Maybe<User>,
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

export type Subscription_Root = {
   __typename?: 'subscription_root',
  User: Array<User>,
  User_aggregate: User_Aggregate,
  User_by_pk?: Maybe<User>,
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

export type User = {
   __typename?: 'User',
  address?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  cover_picture?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  facebook_url?: Maybe<Scalars['String']>,
  first_name: Scalars['String'],
  id: Scalars['uuid'],
  last_name: Scalars['String'],
  linkedin_url?: Maybe<Scalars['String']>,
  logo_image_url?: Maybe<Scalars['String']>,
  met_location?: Maybe<Scalars['String']>,
  met_time?: Maybe<Scalars['timestamptz']>,
  motto?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  profile_handle?: Maybe<Scalars['String']>,
  profile_picture?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  website_url?: Maybe<Scalars['String']>,
};

export type User_Aggregate = {
   __typename?: 'User_aggregate',
  aggregate?: Maybe<User_Aggregate_Fields>,
  nodes: Array<User>,
};

export type User_Aggregate_Fields = {
   __typename?: 'User_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<User_Max_Fields>,
  min?: Maybe<User_Min_Fields>,
};


export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<User_Max_Order_By>,
  min?: Maybe<User_Min_Order_By>,
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>,
};

export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  _not?: Maybe<User_Bool_Exp>,
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  address?: Maybe<String_Comparison_Exp>,
  company?: Maybe<String_Comparison_Exp>,
  cover_picture?: Maybe<String_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  facebook_url?: Maybe<String_Comparison_Exp>,
  first_name?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  last_name?: Maybe<String_Comparison_Exp>,
  linkedin_url?: Maybe<String_Comparison_Exp>,
  logo_image_url?: Maybe<String_Comparison_Exp>,
  met_location?: Maybe<String_Comparison_Exp>,
  met_time?: Maybe<Timestamptz_Comparison_Exp>,
  motto?: Maybe<String_Comparison_Exp>,
  number?: Maybe<String_Comparison_Exp>,
  profile_handle?: Maybe<String_Comparison_Exp>,
  profile_picture?: Maybe<String_Comparison_Exp>,
  title?: Maybe<String_Comparison_Exp>,
  website_url?: Maybe<String_Comparison_Exp>,
};

export enum User_Constraint {
  UserPkey = 'User_pkey',
  UserProfileHandleKey = 'User_profile_handle_key'
}

export type User_Insert_Input = {
  address?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  cover_picture?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  facebook_url?: Maybe<Scalars['String']>,
  first_name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  last_name?: Maybe<Scalars['String']>,
  linkedin_url?: Maybe<Scalars['String']>,
  logo_image_url?: Maybe<Scalars['String']>,
  met_location?: Maybe<Scalars['String']>,
  met_time?: Maybe<Scalars['timestamptz']>,
  motto?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  profile_handle?: Maybe<Scalars['String']>,
  profile_picture?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  website_url?: Maybe<Scalars['String']>,
};

export type User_Max_Fields = {
   __typename?: 'User_max_fields',
  address?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  cover_picture?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  facebook_url?: Maybe<Scalars['String']>,
  first_name?: Maybe<Scalars['String']>,
  last_name?: Maybe<Scalars['String']>,
  linkedin_url?: Maybe<Scalars['String']>,
  logo_image_url?: Maybe<Scalars['String']>,
  met_location?: Maybe<Scalars['String']>,
  met_time?: Maybe<Scalars['timestamptz']>,
  motto?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  profile_handle?: Maybe<Scalars['String']>,
  profile_picture?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  website_url?: Maybe<Scalars['String']>,
};

export type User_Max_Order_By = {
  address?: Maybe<Order_By>,
  company?: Maybe<Order_By>,
  cover_picture?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  facebook_url?: Maybe<Order_By>,
  first_name?: Maybe<Order_By>,
  last_name?: Maybe<Order_By>,
  linkedin_url?: Maybe<Order_By>,
  logo_image_url?: Maybe<Order_By>,
  met_location?: Maybe<Order_By>,
  met_time?: Maybe<Order_By>,
  motto?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
  profile_handle?: Maybe<Order_By>,
  profile_picture?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  website_url?: Maybe<Order_By>,
};

export type User_Min_Fields = {
   __typename?: 'User_min_fields',
  address?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  cover_picture?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  facebook_url?: Maybe<Scalars['String']>,
  first_name?: Maybe<Scalars['String']>,
  last_name?: Maybe<Scalars['String']>,
  linkedin_url?: Maybe<Scalars['String']>,
  logo_image_url?: Maybe<Scalars['String']>,
  met_location?: Maybe<Scalars['String']>,
  met_time?: Maybe<Scalars['timestamptz']>,
  motto?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  profile_handle?: Maybe<Scalars['String']>,
  profile_picture?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  website_url?: Maybe<Scalars['String']>,
};

export type User_Min_Order_By = {
  address?: Maybe<Order_By>,
  company?: Maybe<Order_By>,
  cover_picture?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  facebook_url?: Maybe<Order_By>,
  first_name?: Maybe<Order_By>,
  last_name?: Maybe<Order_By>,
  linkedin_url?: Maybe<Order_By>,
  logo_image_url?: Maybe<Order_By>,
  met_location?: Maybe<Order_By>,
  met_time?: Maybe<Order_By>,
  motto?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
  profile_handle?: Maybe<Order_By>,
  profile_picture?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  website_url?: Maybe<Order_By>,
};

export type User_Mutation_Response = {
   __typename?: 'User_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<User>,
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input,
  on_conflict?: Maybe<User_On_Conflict>,
};

export type User_On_Conflict = {
  constraint: User_Constraint,
  update_columns: Array<User_Update_Column>,
  where?: Maybe<User_Bool_Exp>,
};

export type User_Order_By = {
  address?: Maybe<Order_By>,
  company?: Maybe<Order_By>,
  cover_picture?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  facebook_url?: Maybe<Order_By>,
  first_name?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  last_name?: Maybe<Order_By>,
  linkedin_url?: Maybe<Order_By>,
  logo_image_url?: Maybe<Order_By>,
  met_location?: Maybe<Order_By>,
  met_time?: Maybe<Order_By>,
  motto?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
  profile_handle?: Maybe<Order_By>,
  profile_picture?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  website_url?: Maybe<Order_By>,
};

export enum User_Select_Column {
  Address = 'address',
  Company = 'company',
  CoverPicture = 'cover_picture',
  CreatedAt = 'created_at',
  FacebookUrl = 'facebook_url',
  FirstName = 'first_name',
  Id = 'id',
  LastName = 'last_name',
  LinkedinUrl = 'linkedin_url',
  LogoImageUrl = 'logo_image_url',
  MetLocation = 'met_location',
  MetTime = 'met_time',
  Motto = 'motto',
  Number = 'number',
  ProfileHandle = 'profile_handle',
  ProfilePicture = 'profile_picture',
  Title = 'title',
  WebsiteUrl = 'website_url'
}

export type User_Set_Input = {
  address?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  cover_picture?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  facebook_url?: Maybe<Scalars['String']>,
  first_name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  last_name?: Maybe<Scalars['String']>,
  linkedin_url?: Maybe<Scalars['String']>,
  logo_image_url?: Maybe<Scalars['String']>,
  met_location?: Maybe<Scalars['String']>,
  met_time?: Maybe<Scalars['timestamptz']>,
  motto?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  profile_handle?: Maybe<Scalars['String']>,
  profile_picture?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  website_url?: Maybe<Scalars['String']>,
};

export enum User_Update_Column {
  Address = 'address',
  Company = 'company',
  CoverPicture = 'cover_picture',
  CreatedAt = 'created_at',
  FacebookUrl = 'facebook_url',
  FirstName = 'first_name',
  Id = 'id',
  LastName = 'last_name',
  LinkedinUrl = 'linkedin_url',
  LogoImageUrl = 'logo_image_url',
  MetLocation = 'met_location',
  MetTime = 'met_time',
  Motto = 'motto',
  Number = 'number',
  ProfileHandle = 'profile_handle',
  ProfilePicture = 'profile_picture',
  Title = 'title',
  WebsiteUrl = 'website_url'
}


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type Get_User_ProfileQueryVariables = {
  profileHandle?: Maybe<Scalars['String']>
};


export type Get_User_ProfileQuery = (
  { __typename?: 'query_root' }
  & { User: Array<(
    { __typename?: 'User' }
    & Pick<User, 'first_name' | 'last_name' | 'company' | 'title' | 'address' | 'logo_image_url' | 'number' | 'website_url' | 'linkedin_url' | 'facebook_url' | 'profile_picture' | 'motto' | 'cover_picture' | 'profile_handle' | 'met_location' | 'met_time'>
  )> }
);


export const Get_User_ProfileDocument = gql`
    query GET_USER_PROFILE($profileHandle: String) {
  User(where: {profile_handle: {_eq: $profileHandle}}) {
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
    met_location
    met_time
  }
}
    `;

/**
 * __useGet_User_ProfileQuery__
 *
 * To run a query within a React component, call `useGet_User_ProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_User_ProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_User_ProfileQuery({
 *   variables: {
 *      profileHandle: // value for 'profileHandle'
 *   },
 * });
 */
export function useGet_User_ProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>(Get_User_ProfileDocument, baseOptions);
      }
export function useGet_User_ProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>(Get_User_ProfileDocument, baseOptions);
        }
export type Get_User_ProfileQueryHookResult = ReturnType<typeof useGet_User_ProfileQuery>;
export type Get_User_ProfileLazyQueryHookResult = ReturnType<typeof useGet_User_ProfileLazyQuery>;
export type Get_User_ProfileQueryResult = ApolloReactCommon.QueryResult<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>;