import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {adapter as netlifyAdapter} from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: netlifyAdapter({
			
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#app',
		// ssr: false
	}
};

export default config;
