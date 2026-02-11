// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ONS Interaction Design Library',
			logo: {
				light: './src/assets/ons-logo-light.svg',
				dark: './src/assets/ons-logo-dark.svg',
				replacesTitle: true,
			},
			customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
			social: [],
			sidebar: [
				{
					label: 'Tokens',
					autogenerate: { directory: 'tokens' },
				},
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
				{
					label: 'Templates',
					autogenerate: { directory: 'templates' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
