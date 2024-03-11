<script>
	import { Doughnut } from 'svelte-chartjs';
	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

	/** @type {import('./$types').PageData} */
	export let data;

	let chartData = {
		labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
		datasets: [
			{
				data: [300, 50, 100, 40, 120, 200],
				backgroundColor: ['#b21e4b', '#d42a5b', '#e63f66', '#f27a93', '#f7aab9', '#fbd0d9', '#fde6e9'],
				hoverBackgroundColor: ['#951c45', '#b21e4b', '#d42a5b', '#e63f66', '#f27a93', '#f7aab9']
			}
		]
	};

	let options = {
		responsive: false
	};
</script>

<main class="flex min-h-dvh flex-col items-center justify-start gap-4 px-8 font-propmt">
	<h1 class="text-2xl font-semibold">Question Result</h1>
	<h1 class="text-lg">Title</h1>
	<Doughnut data={chartData} {options} />
    <div class="w-full md:w-96 space-y-4">
        <div class="w-full">
            <p class="text-lg text-primary-500">Choices 1</p>
            <p class="text-neutral-500">40% of people answered this choice.</p>
        </div>
        <div class="w-full">
            <p class="text-lg text-primary-500">Choices 2</p>
            <p class="text-neutral-500">40% of people answered this choice.</p>
        </div>
        <div class="w-full">
            <p class="text-lg text-primary-500">Choices 3</p>
            <p class="text-neutral-500">40% of people answered this choice.</p>
        </div>
    </div>
</main>
