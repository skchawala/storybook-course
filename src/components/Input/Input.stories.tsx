import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input,
}


export const Small = () => <Input size='small' placeholder='Enter Text'/>
export const Medium = () => <Input size='medium' placeholder={'Enter Text'}/>
export const Large = () => <Input size='large' placeholder={'Enter Text'}/>

Small.storyName = 'Small Input'
