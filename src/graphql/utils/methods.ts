import { createHmac, randomBytes } from "node:crypto";
import { HmacHashObject } from "./interfaces.ts";

/**
 * Takes in a string, generates a random salt & then decodes the string using that salt.
 * Returns both solt & hash for further use
 * @param {string} str
 * @returns
 */
export const generateHmacHash = (
  str: string,
  inputSalt?: string
): HmacHashObject => {
  const salt = inputSalt ?? randomBytes(64).toString("hex");
  const hash = createHmac("sha256", salt).update(str).digest("hex");

  return {
    salt,
    hash,
  };
};
