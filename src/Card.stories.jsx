// src/stories/Card.stories.js
import React from 'react';
import Card from './components/Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    imageUrl: { control: 'text' },
  },
};

const Template = (args) => <Card {...args} />;

export const BasicCard = Template.bind({});
BasicCard.args = {
  title: 'Simple Card',
  content: 'This is a basic card component without an image.',
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  title: 'Card with Image',
  content: 'This card includes an image.',
  imageUrl: 'https://placekitten.com/300/200', // Use any image URL here.
};
