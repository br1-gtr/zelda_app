import { createClient } from '@supabase/supabase-js';

//datos log SPB
export const client = createClient(
	process.env.REACT_APP_SUPABASE_URL,
	process.env.REACT_APP_SUPABASE_KEY
);
