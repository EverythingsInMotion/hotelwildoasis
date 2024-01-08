import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://oqubhmnsjzgirrothvtz.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xdWJobW5zanpnaXJyb3RodnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMTMyMDMsImV4cCI6MjAxODc4OTIwM30.2asBTsjHX2QGBFzm6ksHNBiMXkI6Wk0DLk57LDSpyUc`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
