// src/stories/NavMenu.stories.js
import React from 'react';
import NavMenu from './components/NavMenu';

export default {
  title: 'NavMenu',
  component: NavMenu,
};

const Template = (args) => <NavMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ],
};
