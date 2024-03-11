import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const id = params.id;
	let question = null;
	if (browser) {
		const res = await fetch(`${PUBLIC_API_URL}/question/${id}`);
		const data = await res.json();
		if (res.ok) {
			question = data;
            const choice = question.choices.map((choice) => {
                return {
                    id: Math.random().toString(36).substring(2),
                    choice: choice,
                }
            })
            question.choices = choice;
		}
	}
	return {
		question
	};
}
