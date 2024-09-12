// style
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";

// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
