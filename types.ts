export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type Author = {
  __typename?: "Author";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
};

export type BlogPost = {
  __typename?: "BlogPost";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  body: Scalars["String"];
  author: Author;
  createdOn: Scalars["DateTime"];
};

export type CreateBlogPostInput = {
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  body: Scalars["String"];
  authorId: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createBlogPost?: Maybe<BlogPost>;
};

export type MutationCreateBlogPostArgs = {
  input?: Maybe<CreateBlogPostInput>;
};

export type Query = {
  __typename?: "Query";
  allBlogPosts: Array<BlogPost>;
  blogPost?: Maybe<BlogPost>;
};

export type QueryBlogPostArgs = {
  id: Scalars["ID"];
};
