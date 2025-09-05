import { supabaseConfig } from "@/configs";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  supabaseConfig.url,
  supabaseConfig.anonKey
);
