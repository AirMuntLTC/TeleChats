// supabase.js - Handles the Supabase database connection

const SUPABASE_URL = 'https://afuauuqeyggcscncsxpf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdWF1dXFleWdnY3NjbmNzeHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyNjg5OTUsImV4cCI6MjEwMjg0NDk5NX0.WdXna0yzKltGNMS9ty_ebNdxUIyGr5sZXYnCFNJWFKI';

// Correct initialization for CDN script tag
const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Re-assign to 'supabase' so your other files work smoothly
window.supabase = client;
