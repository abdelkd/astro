import markdoc from "@astrojs/markdoc";
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), markdoc()],
	experimental: {
		contentIntellisense: true
	}
});
