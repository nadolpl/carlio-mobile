import { z } from "zod";

export const numOrNull = z
  .union([z.string(), z.number(), z.null(), z.undefined()])
  .transform((val) => (val === "" || val === null || val === undefined ? null : Number(val)));

export const strOrNull = z
  .union([z.string(), z.null(), z.undefined()])
  .transform((val) => (!val || String(val).trim() === "" ? null : String(val).trim()));
