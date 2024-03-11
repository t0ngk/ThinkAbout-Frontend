<script>
// @ts-nocheck

	import Icon from '@iconify/svelte';
	import Button from '$lib/Components/Goback.svelte';

    let haveEdit = false;

    const edit = (i) => {
        haveEdit = !i;
        console.log(haveEdit);
    }
</script>

<div class="absolute">
	<Button />
</div>
<main class="flex min-h-dvh w-full flex-col items-center justify-start gap-4 p-8 font-propmt">
	<h1 class="text-xl font-semibold">Your Questions</h1>
	<div class="flex w-[90%] md:w-1/2">
		<p class="my-4 text-lg font-medium">Questions</p>
	</div>
	<div
		class="flex w-[90%] flex-row justify-between overflow-auto rounded-2xl bg-[#E4E4E4] px-4 py-8 md:w-1/4"
	>
		<input disabled={haveEdit} value="มึงว่ากุสวยไหม" class="p-1 rounded-xl bg-transparent outline-none">
		<button on:click={edit(haveEdit)}>
			<Icon
				icon="material-symbols:edit-square-outline"
				width="24"
				height="24"
				class={` ${haveEdit ? 'text-[#A5A5A5]' : 'text-black'}`}
			/>
		</button>
	</div>
</main>
