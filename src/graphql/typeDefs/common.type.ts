import { gql } from "graphql-tag";

const commonDefs = gql`
  enum OrderBy {
    ASC
    DESC
  }

  enum DeleteStatus {
    SUCCESS
    FAILED
  }

  input PaginationInput {
    pageNumber: Int!
    pageSize: Int!
  }
`;

export default commonDefs;
