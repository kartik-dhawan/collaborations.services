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
`;

export default commonDefs;
