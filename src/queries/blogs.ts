import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    blogs {
      id
      title
      text
      author {
        firstName
        lastName
      }
    }
  }
`;

export const GET_BLOG_BY_ID = gql`
  query GetBlogById($id: ID!) {
    blog(id: $id) {
      title
      text
      comments {
        text
        date
        author {
          username
        }
      }
    }
  }
`;
