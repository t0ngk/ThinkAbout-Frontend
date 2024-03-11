import { browser } from '$app/environment';
import { PUBLIC_API_URL } from '$env/static/public';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const id = params.id;
    let question = null;
    if (browser) {
        const res = await fetch(`${PUBLIC_API_URL}/question/info/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await res.json();
        if (res.ok) {
            question = data;
        }
    }
    return {
        question
    };
};

