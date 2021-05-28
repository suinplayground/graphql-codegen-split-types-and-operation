import * as Types from "./types";

export type GetBlogPostQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetBlogPostQuery = { __typename?: "Query" } & {
  blogPost?: Types.Maybe<
    { __typename?: "BlogPost" } & Pick<
      Types.BlogPost,
      "id" | "title" | "description" | "createdOn"
    > & {
        author: { __typename?: "Author" } & Pick<Types.Author, "id" | "name">;
      }
  >;
};
