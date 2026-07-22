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
					items: [
						{ autogenerate: { directory: 'tokens' }}
					]
				},
				{
					label: 'Styles',
					items: [
						{ autogenerate: { directory: 'styles' }}
					]
				},
				{
					label: 'Components',
					items: [
						{ autogenerate: { directory: 'components' }}
					]
				},
				{
					label: 'Templates',
					items: [
						{ autogenerate: { directory: 'templates' }}
					]
				},
				{
					label: 'Guides',
					items: [
						{ autogenerate: { directory: 'guides' }}
					]
				},
				{
					label: 'Reference',
					items: [
						{ autogenerate: { directory: 'reference' }}
					]
				},
				{
					label: 'Contributing',
					items: [
						{ autogenerate: { directory: 'contributing' }}
					]
				},
			],
		}),
	],
});
