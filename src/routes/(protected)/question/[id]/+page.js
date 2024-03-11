import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const id = params.id;
	let question = null;
	if (browser) {
		const token = localStorage.getItem('token');
		const resIsOwn = await fetch(`${PUBLIC_API_URL}/question/isOwner/${id}/`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const dataIsOwn = await resIsOwn.json();
		if (dataIsOwn.message) {
			goto('/question/' + id + '/result');
		}
		const res = await fetch(`${PUBLIC_API_URL}/question/${id}`);
		const data = await res.json();
		if (res.ok) {
			question = data;
		}
	}
	return {
		question
	};
}
