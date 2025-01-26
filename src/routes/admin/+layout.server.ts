import { redirect } from '@sveltejs/kit';
import { JWT_SECRET, ADMIN_LOGIN } from '$env/static/private';

import jwt from "jsonwebtoken";
export const load = async ({ cookies }) => {
	const user = cookies.get("session");

	if (!user) {
		throw redirect(303, '/login');
	}

    try {
        const t = jwt.verify(user, JWT_SECRET);
        if (t.username !== ADMIN_LOGIN.split(":")[0]) {
            throw redirect(303, '/login');
        }
    } catch {
        throw redirect(303, '/login');
    }

    return;

};