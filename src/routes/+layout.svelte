<script>
    import "../app.css";
    import logo from '$lib/assets/logo.png'
	import { page } from "$app/stores";
</script>


<nav class="border-gray-200 bg-green-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
          <img src={logo} class="h-8 mr-3" alt="RecoChat Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap">RecoChat</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <a href="/" class="block py-2 pl-3 pr-4 {$page.url.pathname === '/' ? 'text-teal-200' : 'text-gray-900'} md:hover:text-teal-200 rounded md:bg-transparent md:p-0">Home</a>
          </li>
          <li>
            <a href="/my-books" class="block py-2 pl-3 pr-4 {$page.url.pathname.match('/my-books') ? 'text-teal-200' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0">My Books</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
<!-- <div class="bg-red-600 h-full"> -->
    <slot />
<!-- </div> -->
