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
  readonly id: Scalars["ID"];
  readonly name: Scalars["String"];
  readonly email: Scalars["String"];
};

export type BlogPost = {
  readonly id: Scalars["ID"];
  readonly title: Scalars["String"];
  readonly description: Maybe<Scalars["String"]>;
  readonly body: Scalars["String"];
  readonly author: Author;
  readonly createdOn: Scalars["DateTime"];
};

export type CreateBlogPostInput = {
  readonly title: Scalars["String"];
  readonly description: Maybe<Scalars["String"]>;
  readonly body: Scalars["String"];
  readonly authorId: Scalars["ID"];
};

export type Mutation = {
  readonly createBlogPost: Maybe<BlogPost>;
};

export type MutationCreateBlogPostArgs = {
  input: Maybe<CreateBlogPostInput>;
};

export type Query = {
  readonly allBlogPosts: ReadonlyArray<BlogPost>;
  readonly blogPost: Maybe<BlogPost>;
};

export type QueryBlogPostArgs = {
  id: Scalars["ID"];
};
