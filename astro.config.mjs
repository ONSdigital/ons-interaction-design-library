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
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
				{
					label: 'Templates',
					autogenerate: { directory: 'templates' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
