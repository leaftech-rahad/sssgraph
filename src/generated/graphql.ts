import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  deletePost?: Maybe<Scalars['Boolean']>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  me?: Maybe<User>;
  signIn?: Maybe<User>;
  signOut?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePostArgs = {
  input?: InputMaybe<CreatePost>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUser>;
};


export type MutationDeletePostArgs = {
  input?: InputMaybe<DeletePost>;
};


export type MutationSignInArgs = {
  input?: InputMaybe<SignIn>;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  username?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allPosts: Array<Post>;
  allUsers: Array<User>;
  findPost: Array<Post>;
  findUser?: Maybe<User>;
};


export type QueryFindPostArgs = {
  input?: InputMaybe<FindPost>;
};


export type QueryFindUserArgs = {
  input?: InputMaybe<FindUser>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Maybe<Post>>>;
  role?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type CreatePost = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreateUser = {
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type DeletePost = {
  id?: InputMaybe<Scalars['ID']>;
};

export type FindPost = {
  title?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type FindUser = {
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type SignIn = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GetUserQueryVariables = Exact<{
  input?: InputMaybe<FindUser>;
}>;


export type GetUserQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', id: string, name: string, email: string, username?: string | null, phone?: string | null, address?: string | null, role?: string | null, createdAt: any } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', allUsers: Array<{ __typename?: 'User', id: string, name: string, email: string, username?: string | null, phone?: string | null, address?: string | null, role?: string | null, createdAt: any }> };


export const GetUserDocument = gql`
    query getUser($input: findUser) {
  findUser(input: $input) {
    id
    name
    email
    username
    phone
    address
    role
    createdAt
  }
}
    `;
export const GetUsersDocument = gql`
    query getUsers {
  allUsers {
    id
    name
    email
    username
    phone
    address
    role
    createdAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUser(variables?: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser', 'query');
    },
    getUsers(variables?: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsers', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;