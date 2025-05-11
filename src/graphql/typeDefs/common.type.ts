import { gql } from "graphql-tag";

const commonDefs = gql`
  enum OrderBy {
    ASC
    DESC
  }
`;

export default commonDefs;
