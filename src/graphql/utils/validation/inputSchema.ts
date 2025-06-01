import { UserRole } from "../../generated/graphql.ts";
import * as yup from "yup";

/** ===========USER INPUT VALIDATION SCHEMA ================================================================================================== */

export const createUserInputSchema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required().min(3),
    password: yup.string().required().min(10),
    role: yup.mixed<UserRole>().optional(),
  })
  .required();

export const deleteUserInputSchema = yup.number().required();

/** ===========COLLABORATIONS INPUT VALIDATION SCHEMA ================================================================================================== */

/** ===========CLIENT INPUT VALIDATION SCHEMA ================================================================================================== */
