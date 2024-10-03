# @nefex-ui/react

## Installation

- First install the styled-components on your project using:
```
# with npm
npm install styled-components

# with yarn
yarn add styled-components
```

- Second config the theme on your project
```ts
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@nefex-ui/react';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World!</h1>
    </ThemeProvider>
  );
}

export default App;
```

- You can also use your own colors, create the folder `styles` on src and add new file `theme`, now you can import your own theme on app:
  - Here you can change the whole theme to suit your preferences.
```ts
// project/scr/styles/theme.ts
import { defaultTheme } from '@nefex-ui/react';

const { colors, ...restDefaultTheme } = defaultTheme;

const { primary, secondary, ...restColors } = colors;

export const theme = {
  colors: {
    primary: 'your_primary_color',
    secondary: 'your_secondary_color',
    ...restColors,
  },
  ...restDefaultTheme,
};
```
