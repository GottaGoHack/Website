import stat from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: 'body',
		adapter: stat()
	},
	preprocess: preprocess({
		replace: [
			[/import '\//g, "import '/src/"],
			[/from '\//g, "from '/src/"]
		],
		sourceMap: true,
		scss: {
			renderSync: true,
			includePaths: ['src/styles']
		}
	})
};

export default config;
