import theme from "./theme";

import React from 'react';

import Provider from '../src/components/Provider';

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  )
];

export const parameters = {
    docs: {
        theme: theme
    },
    viewport: {
        defaultViewport: 'initSize',
        viewports: {
            kindleFire2: {
                name: 'initSize',
                styles: {
                    width: '1224px',
                    height: '672px'
                },
                type: 'desktop'
            }
        }
    }
};