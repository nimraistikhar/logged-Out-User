import React from 'react'
// import { Content } from './LightDarkButton/Content'
import { GlobalStyles, lightTheme, darkTheme } from './LightDarkButton/styles/Globaly';
import { useDarkMode } from './LightDarkButton/styles/useDarkMode'
import { Toggle } from './LightDarkButton/Toggle';
import { ThemeProvider } from 'styled-components'

function Theming() {
  const [theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            {/* <Content /> */}
    </ThemeProvider>
  );
}

export default Theming;
