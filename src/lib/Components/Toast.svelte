<script context="module">
 
  const {
    elements: { content, title, description, close },
    helpers,
    states: { toasts },
    actions: { portal }
  } = createToaster()
 
  export const addToast = helpers.addToast
</script>
 
<script>
  import { createToaster, melt } from '@melt-ui/svelte'
	import { slide } from 'svelte/transition';
</script>
 
<div use:portal class="absolute bottom-0 w-full flex flex-col space-y-2 justify-center px-10 py-2">
  {#each $toasts as { id, data } (id)}
    <div use:melt={$content(id)} class="w-full" transition:slide >
      <div class="flex w-full justify-between rounded p-2 text-white gap-4"
      class:bg-red-500={data?.type == 'error'}
      class:bg-green-500={data?.type == 'success'}
      class:bg-primary-500={data?.type == 'info'}>
        <div>
          <h3 use:melt={$title(id)}>
            {data?.message}
          </h3>
        </div>
        <button use:melt={$close(id)} aria-label="close notification"> X </button>
      </div>
    </div>
  {/each}
</div>
