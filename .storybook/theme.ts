import { create } from '@storybook/theming';

export default create({
    base: 'dark',

    gridCellSize: 8,

    // BRAND
    brandTitle: 'Bit of Meat',
    brandUrl: '/',
    brandImage: '/logo.png',

    // Typography
    fontBase: 'Roboto',
    fontCode: 'monospace',

    // APP
    textColor: '#b3aca5',
    colorPrimary: '#ff5e52',
    colorSecondary: '#ff5e52',
    appBg: '#292929',
    appContentBg: '#313131',
    appBorderRadius: 16,

    // Bar
    barTextColor: '#b3aca5',
    barBg: '#313131',
    barSelectedColor: '#ff5e52',

    // Input
    inputTextColor: '#b3aca5',
    inputBg: '#292929',
    inputBorder: "none",
    inputBorderRadius: 8
});