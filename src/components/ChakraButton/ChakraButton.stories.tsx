import * as React from 'react';
import {Button} from "@chakra-ui/react";
import {text, boolean} from '@storybook/addon-knobs'

const title = 'Chakra/Button';
export default {
    title: title
}


export const Success = () => <Button disabled={false} variant='solid' colorScheme='green'>Success</Button>


export const WithKnobs = () => <Button disabled={boolean('Disabled', false)} variant='solid' colorScheme='green'>
    {text('Label', 'Success')}
</Button>