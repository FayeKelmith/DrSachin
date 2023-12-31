import { createClient } from "@supabase/supabase-js";
import { Database } from "./db_types";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
