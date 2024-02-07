import { createClient } from "@supabase/supabase-js";
import { ref } from "vue";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const { data } = await supabase.auth.getUser()

export const user = ref(data.user)
supabase.auth.onAuthStateChange(async ()=>{
 const { data } = await supabase.auth.getUser()
 user.value = data.user
})

globalThis.supabase = supabase
