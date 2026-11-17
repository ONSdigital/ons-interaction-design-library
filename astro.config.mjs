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
						{
							label: 'Figma component library',
							items: [
								{
									label: 'Structure and organisation',
									slug: 'contributing/component-library/structure-and-organisation',
								},
							]
						},
						{
							label: 'Documentation',
							items: [
								{
									label: 'Overview',
									slug: 'contributing/documentation/overview',
								},
								{
									label: 'Getting started',
									slug: 'contributing/documentation/getting-started',
								},
								{
									label: 'Documentation guidelines',
									slug: 'contributing/documentation/documentation-guidelines',
								},
								{
									label: 'Creating a Copilot AI Agent',
									slug: 'contributing/documentation/creating-a-copilot-ai-agent',
								},
								{
									label: 'Using AI to write documentation',
									slug: 'contributing/documentation/using-ai-to-write-documentation',
								},
								{
									label: 'Creating and publishing documentation',
									slug: 'contributing/documentation/creating-and-publishing-documentation',
								},
							]
						}	
					],
				},
			],
		}),
	],
});
