// style
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";

// components

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
