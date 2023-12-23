import { createClient } from "@supabase/supabase-js";
import { Database } from "./db_types";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

if (supabaseUrl === "") {
  console.log("SUPABASE_URL is not defined");
}
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
