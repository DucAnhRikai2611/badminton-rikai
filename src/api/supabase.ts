import { supabaseConfig } from "@/configs";
import type { Database } from "@/types/database";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient<Database>(
  supabaseConfig.url,
  supabaseConfig.anonKey
);
