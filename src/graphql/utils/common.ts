import { Prisma } from "../../prisma/generated/index.js";
import { OrderBy } from "../generated/graphql.ts";

export const graphQLToPrismaSortingLabels: Record<OrderBy, Prisma.SortOrder> = {
  [OrderBy.Asc]: Prisma.SortOrder.asc,
  [OrderBy.Desc]: Prisma.SortOrder.desc,
};
