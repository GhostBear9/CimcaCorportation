/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  RulesRegSideBar: [
	{
      type: 'category',
      label: 'Rules & Regulations',
		link: {
			type: 'generated-index',
			title: 'Rules & Regulations',
			description: '***Set the description***',
			slug: '/intro2',
			keywords: ['rules'],
		},
      collapsed: true,
      items: [
        'intro2',
		'Chain',
		'Info',
      ],
    },
  ],
    PubDocsSideBar: [
	{
      type: 'category',
      label: 'Public Documents',
		link: {
			type: 'generated-index',
			title: 'Public Documents',
			description: '***Set the description***',
			slug: '/intro',
			keywords: ['documents'],
		},
      collapsed: true,
      items: [
        'intro',
      ]
    }
  ]
};

module.exports = sidebars;
