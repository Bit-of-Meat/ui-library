<h1 align="center">UI Library</h1>

<h4 align="center">UI Library used for Bit of Meat launcher</h4>

<p align="center">
  <img alt="Discord" src="https://img.shields.io/discord/821089498984349716?color=%235865F2&label=discord&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Bit-of-Meat/ui-library?style=for-the-badge">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/bit-of-meat/ui-library?style=for-the-badge">
</p>

## Usage
1) Configure your .npmrc file. See [working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
2) Install package:
```ps
npm i @bit-of-meat/ui-library
```
3) Add provider to your ``index`` file
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from '@bit-of-meat/ui-library';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);
```

### Example
In App.jsx file:
```jsx
import { Dropdown } from '@bit-of-meat/ui-library';

export default () => {
  return (
    <div>
       <p>Select: </p>
       <Dropdown items={["Item #1", "Item #2", "Item #3"]} />
    </div>
  )
}
```

## Scripts
<table>
  <tr>
    <td>Script</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>npm run build</td>
    <td>Run rollup bundle, output dir: <code>./dist</code></td>
  </tr>
  <tr>
    <td>npm run test:generate-output</td>
    <td>Run test and saves their results in <code>.jest-test-results.json</code> file</td>
  </tr>
  <tr>
    <td>npm run test</td>
    <td>Run tests</td>
  </tr>
  <tr>
    <td>npm run storybook</td>
    <td>Run storybook dev server</td>
  </tr>
  <tr>
    <td>npm run build-storybook</td>
    <td>Build storybook, output dir: <code>./storybook-static<code></td>
  </tr>
</table>


## Credits 💖
Made by [Bit of Meat](https://github.com/Bit-of-Meat) team.
