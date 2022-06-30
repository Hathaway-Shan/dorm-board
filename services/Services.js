const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    //grab string values from supabase table
    const response = await client
        .from('posts')
        .select(`title, description, contact, created_at`)
        .order('created_at', { ascending: false });
    return response.data;
}

export async function getUser() {
    //return supabase user
    return await client.auth.session() && client.auth.session().user;
}

export async function signUp(email, password) {
    //implement supabase signup
    return await client.auth.signUp({ email, password });
}

export async function signIn(email, password) {
    //implement supabase sign in
    return await client.auth.signIn({ email, password });
}

export async function signOut() {
    //implement supabase sign out
    await client.auth.signOut();
}

export async function addBulletinItem(title, description, contact) {
    const response = await client.from('posts').insert({ title: title, description: description, contact: contact }).single();
    return response;
}