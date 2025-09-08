import { supabase } from "./supabase";
import { getRangeQuery } from "@/helpers";
import {
  type TEventUpdate,
  type TGetEvent,
  type TGetEventDetail,
  type TUpdateEvent,
} from "@/types";
import type { TPagination } from "@/types/supabase";

export const getEvents = async (
  pagination: TPagination
): Promise<TGetEvent> => {
  const { from, to } = getRangeQuery(pagination);

  const { count, data, error } = await supabase
    .from("events")
    .select("*", {
      count: "exact",
    })
    .range(from, to)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return {
    count: count || 0,
    data,
  };
};

export const getEventDetail = async (id: string): Promise<TGetEventDetail> => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
};

export const updateEvent = async (
  id: string,
  event: TEventUpdate
): Promise<TUpdateEvent> => {
  const { data, error } = await supabase
    .from("events")
    .update(event)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const deleteEvent = async (ids: string[]): Promise<boolean> => {
  const { error } = await supabase.from("events").delete().in("id", ids);

  if (error) throw error;

  return true;
};
