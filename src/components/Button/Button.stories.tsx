import React from "react";
import Button from "./Button";
import Centered from "../centered/Centered";

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Button'
    },
    argTypes: {
        onClick: {action: 'clicked'}
    }
    //decorators: [(story: any) => <Centered>{typeof story === 'function' ? story() : story}</Centered>]
}


export const Primary = () => <Button variant={'primary'}>Primary</Button>

export const Secondary = () => <Button variant={'secondary'}>Secondary</Button>

export const Success = () => <Button variant={'success'}>Success</Button>

export const Danger = () => <Button variant={'danger'}>Danger</Button>

const Template = (args2: any) => <Button {...args2}/>


export const PrimaryA: any = Template.bind({})

PrimaryA.args = {
    variant: 'primary',
    onClick: () => {
        console.log('PrimaryA',process,process.env.STORYBOOK_THEME)
    }
}

export const SecondaryA: any = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args',
    onClick: () => {
        console.log('secondaryA', process.env.STORYBOOK_THEME)
    }
}