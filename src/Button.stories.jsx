import Button from './components/Button'; 

export default {
    title: "Button", 
    component: Button, 
    argsType: {
        color: {control: 'radio', options: ['prmary', 'secondary']}, 
        size: {control: 'radio', options: ['small', 'large']},
    },
}; 

const Template = (args) => <Button {...args}/> 

export const Primary = Template.bind({}); 
Primary.args = { label: 'Primary Button', color: 'primary', size: 'large'}

export const Secondary = Template.bind({}) 
Secondary.args = { label: 'Secondary Button', color: 'secondary', size: 'large'}

export const small = Template.bind({});  
small.args = { label: 'Small Button', color: 'primary', size: 'small'}

export const clickable= Template.bind({});  
clickable.args = { label: 'Click Me!', onclick: () => alert('Button Clicked'),  color: 'primary', size: 'large'}

