import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    let questions = [];
    const res = await fetch(`${PUBLIC_API_URL}/question/all`);
    const data = await res.json();
    if (res.ok) {
        questions = data;
    }
    return {
        questions
    };
};
