import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xrrpxwemdypvdjhkfesp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhycnB4d2VtZHlwdmRqaGtmZXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MjcwNzEsImV4cCI6MjAzMjAwMzA3MX0.4Dk2HyhMOKP1ul6VavkV_-1RkJvwsanOsneqAuRygJI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
