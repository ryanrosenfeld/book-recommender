<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

    export let data;
    let query = data.initialQuery ?? '';

    async function onSubmit() {
      const urlQuery = $page.url.searchParams.get('q')?.trim();
      const trimmedQuery = query.trim()
      if (trimmedQuery == urlQuery?.trim()) {
        return
      }

      if (trimmedQuery === '') {
        await goto('/', { keepFocus: true })
        return;
      }

      await goto(`/?q=${encodeURIComponent(trimmedQuery)}`, {
        keepFocus: true
      })
    }
</script>

<div class="flex justify-center items-center w-full h-full flex-col">
    <h1 class="text-xl mt-10">Find your next book</h1>
    <form on:submit|preventDefault={onSubmit} class="mt-4 flex flex-col w-96">
        <textarea bind:value={query} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."></textarea>
        <button type="submit" class="w-full bg-green-600 rounded-md mt-4">Submit</button>
    </form>
    {#if data.response}
        <p>{data.response}</p>
    {/if}
</div>


