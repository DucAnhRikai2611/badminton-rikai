import type { Database } from "./database";

export type TEvent = Database["public"]["Tables"]["events"]["Row"];

export type TFilterGetEvents = {
  key?: string;
};

export type TGetEvent = {
  count: number;
  data: TEvent[];
};

export type TGetEventDetail = TEvent | null;

export type TEventUpdate = Pick<
  TEvent,
  "description" | "duration" | "start_at" | "status" | "tags" | "title"
>;

export type TUpdateEvent = TEvent;
