import { browser } from '$app/environment';
import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let questions = [];
	if (browser) {
		const res = await fetch(`${PUBLIC_API_URL}/question/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
		const data = await res.json();
		console.log('data', data);
		if (res.ok) {
			questions = data;
		}
	}
	return {
		questions
	};
}
