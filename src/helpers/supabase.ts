import type { TPagination } from "@/types/supabase";

export const getRangeQuery = ({
  page,
  take,
}: TPagination): { from: number; to: number } => {
  return {
    from: (page < 0 ? 0 : page - 1) * take,
    to: page * take,
  };
};
