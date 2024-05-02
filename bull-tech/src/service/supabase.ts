import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bjfmqkgwdnrrjrgyicfi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZm1xa2d3ZG5ycmpyZ3lpY2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3OTAwNDgsImV4cCI6MjAyOTM2NjA0OH0.dr9UaA2IahU9d1MdDe_ESgCUH0yBSDoWFREf7SGlwDQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
