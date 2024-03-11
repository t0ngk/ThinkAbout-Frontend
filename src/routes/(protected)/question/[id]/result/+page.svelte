<script>
	import { goto } from '$app/navigation';
	import Doughnut from '$lib/Components/Doughnut.svelte';
	import Goback from '$lib/Components/Goback.svelte';
	import userStore from '$lib/stores/userStore.js';
	import groupBy from 'object.groupby';

	/** @type {import('./$types').PageData} */
	export let data;

	const question = data.question;

	const labels = question.choices;
	const groupByAnswer = groupBy(question.Answer || [], (item) => {
		return item.answer;
	});

	const groupByAnswerAndGender = (answer) => {
		return groupBy(groupByAnswer[answer] || [], (item) => {
			return item.user.Gender;
		});
	};

	const makeDataset = (data) => {
		const keyAndValue = Object.entries(data);
		const dataset = keyAndValue.map((item) => {
			return item[1].length;
		});
		return dataset;
	};

	const makeLabels = (data) => {
		const keyAndValue = Object.entries(data);
		const labels = keyAndValue.map((item) => {
			return item[0];
		});
		return labels;
	};

	const flatten = (arr) => {
		return arr.reduce((acc, val) => acc.concat(val), []);
	};

	const calPenetration = (choice, arr) => {
		const totalAnswer = flatten(Object.values(arr)).length;
		const choiceAnswer = arr[choice]?.length;
		const percent = (choiceAnswer / totalAnswer) * 100;
		if (isNaN(percent)) {
			return 0;
		}
		if (percent.toString().includes('.')) {
			return percent.toFixed(2);
		} else {
			return percent;
		}
	};
</script>

<Goback />
<main class="flex min-h-dvh flex-col items-center justify-start gap-4 p-8 md:pt-0 font-propmt">
	<h1 class="text-2xl font-semibold">Question Result</h1>
	<div class="w-full flex flex-col md:flex-row justify-between items-center">
		<h1 class="text-base md:text-lg">Question {question?.question || 'Unknow'}</h1>
		<button
		on:click={() => {
			goto(`/question/${question.id}/edit`);
		}}
			class="block w-full rounded-xl bg-primary-500 px-4 py-2 text-white transition active:bg-primary-600 md:w-auto md:hover:bg-primary-600 md:active:bg-primary-700"
			>Edit</button
		>
	</div>
	<div class="flex flex-col items-center gap-2 md:flex-row">
		<Doughnut {labels} data={makeDataset(groupByAnswer)} />
		<div class="w-full space-y-4 md:w-96">
			{#each question.choices as choice}
				<div class="w-full">
					<p class="text-lg text-primary-500">Choice : {choice}</p>
					<p class="text-neutral-500">
						{calPenetration(choice, groupByAnswer)}% of people answered this choice.
					</p>
				</div>
			{/each}
		</div>
	</div>
	{#if $userStore.package === 'premium'}
		<h1 class="text-xl font-semibold">Gender</h1>
		{#each question.choices as choice}
			<p>Choice : {choice}</p>
			<div class="flex flex-col items-center gap-2 md:flex-row">
				<Doughnut
					labels={makeLabels(groupByAnswerAndGender(choice))}
					data={makeDataset(groupByAnswerAndGender(choice))}
				/>
				<div class="w-full space-y-4 md:w-96">
					{#each Object.entries(groupByAnswerAndGender(choice)) as [item, _]}
						<div class="w-full">
							<p class="text-lg text-primary-500">Gender : {item}</p>
							<p class="text-neutral-500">
								{calPenetration(item, groupByAnswerAndGender(choice))}% of people answered this
								choice.
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</main>
