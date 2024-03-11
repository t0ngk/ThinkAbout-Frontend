<script>
	import { goto } from '$app/navigation';
	import Input from '$lib/Components/Input.svelte';
	import { PUBLIC_API_URL } from '$env/static/public';

	/** @type {import('./$types').PageData} */
	export let data;

	let email = '';
	let password = '';

	const login = async () => {
		const res = await fetch(`${PUBLIC_API_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});
		const data = await res.json();
		if (res.ok) {
			localStorage.setItem('token', data.token);
			goto('/')
		} else {
			alert(data.message);
		}
	};
</script>

<main class="flex min-h-dvh flex-col items-center justify-center gap-10 p-8 font-propmt">
	<div class="text-center">
		<h3 class="font-light">Welcome to</h3>
		<h1 class="text-4xl font-bold text-primary-500">ThinkAbout</h1>
	</div>
	<div class="flex w-full flex-col items-center space-y-5">
		<Input
			class="block w-full md:w-96"
			bind:value={email}
			label="Email"
			icon="clarity:email-line"
		/>
		<Input
			class="block w-full md:w-96"
			bind:value={password}
			label="Password"
			icon="f7:lock"
			type="password"
		/>
	</div>
	<div class="w-full space-y-2 md:w-auto">
		<button
			on:click={login}
			class="block w-full rounded-xl bg-primary-500 py-2 text-white transition active:bg-primary-600 md:w-96 md:hover:bg-primary-600 md:active:bg-primary-700"
			>Login</button
		>
		<div class="text-center text-sm">
			<p class="text-neutral-300">
				Don't have an account? <span
					><button
						on:click={() => {
							goto('/register');
						}}
						class="text-primary-500 transition active:text-primary-600 md:hover:text-primary-600 md:active:text-primary-700"
						>Sign up</button
					></span
				>
			</p>
		</div>
	</div>
</main>
