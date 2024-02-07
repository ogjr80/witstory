// src/stories/CardGrid.stories.js
import React from 'react';
import CardGrid from './components/CardGrid';

export default {
  title: 'CardGrid',
  component: CardGrid,
};

const Template = (args) => <CardGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      title: 'Card 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://placekitten.com/300/200',
    },
    {
      title: 'Card 2',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imageUrl: 'https://placekitten.com/301/200',
    },
    {
      title: 'Card 3',
      content: 'Fusce tincidunt justo eget ultrices ultricies.',
      imageUrl: 'https://placekitten.com/302/200',
    },
    {
      title: 'Card 4',
      content: 'Donec ac urna in ex efficitur eleifend.',
      imageUrl: 'https://placekitten.com/303/200',
    },
  ],
};
