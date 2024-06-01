import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** Blog type. Blogs created by users */
export type Blog = {
  __typename?: "Blog";
  /** Author of the blog. User id */
  author: User;
  /** Comment list for this blog left by users */
  comments?: Maybe<Array<Maybe<Comment>>>;
  /** The unique identifier for the blog. */
  id: Scalars["ID"]["output"];
  /** Blog text content. */
  text: Scalars["String"]["output"];
  /** Blog header or title. Describes shortly topic of blog */
  title: Scalars["String"]["output"];
};

/** Comments that users leave ander blogs */
export type Comment = {
  __typename?: "Comment";
  /** User id which leave comment. */
  author: User;
  /** When comment was created. */
  date: Scalars["String"]["output"];
  /** The unique identifier for the comment. */
  id: Scalars["ID"]["output"];
  /** Comment text content. */
  text: Scalars["String"]["output"];
};

export type CreateCommentInput = {
  author: Scalars["ID"]["input"];
  blog: Scalars["ID"]["input"];
  text: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** Adds a comment to particular blog */
  addComment: Comment;
  /** Deletes a comment */
  deleteComment: Scalars["Boolean"]["output"];
};

export type MutationAddCommentArgs = {
  input?: InputMaybe<CreateCommentInput>;
};

export type MutationDeleteCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type Query = {
  __typename?: "Query";
  /** Blog by ID */
  blog?: Maybe<Blog>;
  /** All blogs */
  blogs: Array<Blog>;
  comments?: Maybe<Array<Comment>>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryBlogArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

/** Users of blog application. Authors of blogs and comments */
export type User = {
  __typename?: "User";
  /** User's address */
  address: Scalars["String"]["output"];
  /** User's age */
  age: Scalars["Int"]["output"];
  /** Origin county of user */
  country: Scalars["String"]["output"];
  /** User's email */
  email: Scalars["String"]["output"];
  /** User's first name */
  firstName: Scalars["String"]["output"];
  /** List of user's friends */
  friends?: Maybe<Array<Maybe<User>>>;
  /** The unique identifier for the user. */
  id: Scalars["ID"]["output"];
  /** User's first name */
  lastName: Scalars["String"]["output"];
  /** User's phone */
  phone: Scalars["String"]["output"];
  /** Uniq username to be visible and identified by other users */
  username: Scalars["String"]["output"];
};
