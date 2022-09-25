import * as React from 'react';
import './Input.css'
interface IOwnProps {
    placeholder: string,
    size: string
}


type Props = IOwnProps

const Input: React.FC<Props> = (props) => {
    const {size, placeholder, ...rest} = props;

    return <input className={`${size}`} placeholder={placeholder}/>
};


export default Input
