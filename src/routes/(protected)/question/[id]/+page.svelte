<script>
	import { PUBLIC_API_URL } from '$env/static/public';
	import Choices from '$lib/Components/Choices.svelte';
	import Button from '$lib/Components/Goback.svelte';
	import Thankyou from '$lib/Components/Thankyou.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const question = data.question;
	let selected;
	let isSent = false;
	let percentage = 0;

	const sentAnswer = async () => {
		const res = await fetch(`${PUBLIC_API_URL}/answer/create/${question?.id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({ answer: $selected })
		});
		const data = await res.json();
		if (res.ok) {
			percentage = data;
			isSent = true;
		} else {
			console.log(data);
		}
	};
</script>

<div class="absolute">
	<Button />
</div>
<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 md:pt-0 font-propmt">
	<h1 class="text-2xl font-semibold text-primary-600">Questions</h1>
	<p>{question?.question}</p>
	{#if !isSent}
		<Choices bind:value={selected} options={question?.choices} />
		<div class="flex w-full justify-center gap-2 md:justify-end">
			<button
				class="hidden w-full rounded-lg bg-neutral-100 px-4 py-2 text-neutral-500 transition-all active:bg-neutral-200 md:block md:w-auto md:hover:bg-neutral-200 md:active:bg-neutral-300"
				>Back</button
			>
			<button
				on:click={sentAnswer}
				class="w-full rounded-lg bg-primary-500 px-4 py-2 text-white transition-all active:bg-primary-600 md:w-auto md:hover:bg-primary-600 md:active:bg-primary-700"
				>Submit</button
			>
		</div>
	{:else}
		<Thankyou {percentage} />
	{/if}
</main>
