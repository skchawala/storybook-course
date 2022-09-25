import React from "react";
import {addDecorator, addParameters} from "@storybook/react";
import Centered from "../src/components/centered/Centered";
import {CSSReset, ChakraProvider} from "@chakra-ui/react";
import {withConsole} from '@storybook/addon-console'
import {withKnobs} from "@storybook/addon-knobs";
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";
import {withA11y} from '@storybook/addon-a11y'

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            method: 'alphabetical'
        }
    },
}

// add parameters
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
})

// decorators
addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator((storyFun, context) => withConsole()(storyFun)(context
))

addDecorator((story) => <ChakraProvider>
    <CSSReset/> <Centered>{typeof story === 'function' ? story() : story}</Centered></ChakraProvider>)