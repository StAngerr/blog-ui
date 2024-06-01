import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation addComment($input: CreateCommentInput!) {
    addComment(input: $input) {
      id
      text
    }
  }
`;
