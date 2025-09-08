import type { Database } from "./database";

export type TPagination = {
  take: number;
  page: number;
};

export type TPaginationRange = {
  from: number;
  to: number;
};

export type TTableName = string & keyof Database["public"]["Tables"];

export type TSchema<T extends Record<string, string>> = {
  [K in keyof T]: T[K];
};
