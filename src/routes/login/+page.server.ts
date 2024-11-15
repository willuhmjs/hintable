import type { Actions } from './$types';
import { ADMIN_LOGIN, JWT_SECRET } from '$env/static/private';
import jwt from "jsonwebtoken";


import { error, redirect } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        const legitUser = username === ADMIN_LOGIN.split(":")[0] && password === ADMIN_LOGIN.split(":")[1];
        if (!legitUser) {
            return error(401, "Invalid credentials");
        } else {
            const session_token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1d' });
            cookies.set("session", session_token, { path: "/", httpOnly: true, secure: true, sameSite: "strict" });
            return redirect(303, '/admin');
        } 
    }
} satisfies Actions;

