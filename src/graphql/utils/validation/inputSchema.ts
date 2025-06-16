import { PermissionValue, UserRole } from "../../generated/graphql.ts";
import * as yup from "yup";

/** ===========USER INPUT VALIDATION SCHEMA ================================================================================================== */

export const createUserInputSchema = yup
  .object({
    email: yup
      .string()
      .email("Email must be of valid format.")
      .required("Email is a required input."),
    name: yup
      .string()
      .required("Name is a required input.")
      .min(3, ({ min }) => `Name must be at least ${min} characters long.`),
    password: yup
      .string()
      .required()
      .min(
        10,
        ({ min }) => `Password must be at least ${min} characters long.`
      ),
    role: yup.mixed<UserRole>().optional(),
  })
  .required();

export const deleteUserInputSchema = yup
  .number()
  .required("User ID is required and must be a positive number.")
  .min(0, "User ID is required and must be a positive number.");

export const updateUserInputSchema = yup
  .object({
    id: yup
      .number()
      .required("User ID is required and must be a positive number.")
      .min(0),
    email: yup.string().email("Email must be of valid format.").optional(),
    name: yup
      .string()
      .min(3, ({ min }) => `Name must be at least ${min} characters long.`)
      .optional()
      .nullable(),
    role: yup.mixed<UserRole>().optional().nullable(),
  })
  .required();

export const assignPermissionsInputSchema = yup
  .object({
    role: yup.mixed<UserRole>().required("Role is a required input."),
    permissions: yup
      .array()
      .of(yup.mixed<PermissionValue>().required())
      .required()
      .min(1, "At least one permission is required."),
  })
  .required();

/** ===========COLLABORATIONS INPUT VALIDATION SCHEMA ================================================================================================== */

/** ===========CLIENT INPUT VALIDATION SCHEMA ================================================================================================== */
