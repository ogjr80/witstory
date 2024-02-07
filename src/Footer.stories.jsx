// src/stories/Footer.stories.js
import React from 'react';
import Footer from './components/Footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  copyrightText: 'Your Company Name',
};
