import * as React from 'react';
import './Centered.css'

interface IOwnProps {
    children: React.ReactElement
}


type Props = IOwnProps

const Centered: React.FC<Props> = (props) => {
    return <div className={'center'}>{props.children}</div>
};


export default Centered
