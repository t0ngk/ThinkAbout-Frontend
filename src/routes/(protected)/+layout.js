import { browser } from '$app/environment';
import { PUBLIC_API_URL } from '$env/static/public';
import userStore from '$lib/stores/userStore';
import { goto } from '$app/navigation';

/** @type {import('./$types').LayoutLoad} */
export async function load({fetch}) {
    if (browser) {
        const token = localStorage.getItem('token');
        if (token) {
            const response = await fetch(`${PUBLIC_API_URL}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const user = await response.json();
                userStore.set(user);
            } else {
                localStorage.removeItem('token');
                goto('/login');
            }
        } else {
            goto('/login');
        }
    }
    return {};
}
