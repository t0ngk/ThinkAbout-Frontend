<script>
	import { createDatePicker, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { CalendarDate } from '@internationalized/date';
	import { twMerge } from 'tailwind-merge';
	import Select from './Select.svelte';
	import Icon from '@iconify/svelte';

	let className = '';
	export { className as class };
	const today = new Date();
	const yearLimitArray = Array.from({ length: 100 }, (_, i) => today.getFullYear() - i);

	const {
		elements: {
			calendar,
			cell,
			content,
			field,
			grid,
			heading,
			label,
			nextButton,
			prevButton,
			segment,
			trigger
		},
		states: { months, headingValue, weekdays, segmentContents, open, value },
		helpers: { isDateDisabled, isDateUnavailable },
		options: { locale }
	} = createDatePicker({
		forceVisible: true,
		defaultValue: new CalendarDate(today.getFullYear() - 13, today.getMonth(), today.getDate()),
		maxValue: new CalendarDate(today.getFullYear() - 13, today.getMonth(), today.getDate()),
		fixedWeeks: true,
		preventDeselect: true
	});
</script>

<section class={twMerge('relative flex flex-col gap-1 transition-all', className)}>
	<div class="w-full">
		<div
			class={`group/input relative w-full cursor-pointer rounded-xl bg-neutral-100 px-3 py-1 text-start text-neutral-500 outline transition-all focus-within:outline-primary-500 ${$open ? 'outline-primary-500' : 'outline-transparent'}`}
		>
			<span
				use:melt={$label}
				class={`m-0 block cursor-pointer select-none text-sm font-light transition group-focus-within/input:text-primary-500 ${$open ? 'text-primary-500' : 'text-neutral-300'}`}
				>Date</span
			>
			<div class="flex" use:melt={$field}>
				{#key $locale}
					{#each $segmentContents as seg}
						<div use:melt={$segment(seg.part)} class="transition-all focus:outline-primary-500">
							{seg.value}
						</div>
					{/each}
				{/key}
			</div>
		</div>
		<div
			use:melt={$trigger}
			class="absolute right-3 top-1/2 flex aspect-square h-2/3 -translate-y-1/2 transform items-center justify-center rounded-lg bg-primary-500 active:bg-primary-600 md:hover:bg-primary-600 md:active:bg-primary-700"
		>
			<Icon icon="uiw:date" class="text-white" />
		</div>
	</div>
	{#if $open}
		<div
			transition:fade={{ duration: 100 }}
			use:melt={$content}
			class="rounded-lg border bg-neutral-100 p-4 text-neutral-500 shadow-lg"
		>
			<div use:melt={$calendar}>
				<header
					class="flex w-full justify-between gap-4 transition data-[disabled]:text-neutral-300 data-[disabled]:cursor-not-allowed"
				>
					<button use:melt={$prevButton} class="p-2">
						<Icon icon="eva:chevron-left-fill" class="text-2xl" />
					</button>
					<div use:melt={$heading} class="flex items-center gap-2">
						{$headingValue}
					</div>
					<button use:melt={$nextButton} class="p-2 transition data-[disabled]:text-neutral-300 data-[disabled]:cursor-not-allowed">
						<Icon icon="eva:chevron-right-fill" class="text-2xl" />
					</button>
				</header>
				<div>
					{#each $months as month}
						<table use:melt={$grid} class="w-full text-center">
							<thead aria-hidden="true">
								<tr>
									{#each $weekdays as day}
										<th>
											<div class="flex h-6 w-6 items-center justify-center p-4">
												{day}
											</div>
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each month.weeks as weekDates}
									<tr>
										{#each weekDates as date}
											<td
												role="gridcell"
												aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
											>
												<div
													class={`flex h-6 w-6 items-center justify-center rounded-lg p-4 transition-all duration-75 data-[selected]:bg-primary-600 data-[selected]:text-white
                          ${$isDateDisabled(date) || $isDateUnavailable(date) ? 'cursor-not-allowed text-neutral-300' : 'hover:outline hover:outline-primary-700'}
                          `}
													use:melt={$cell(date, month.value)}
												>
													{date.day}
												</div>
											</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>
