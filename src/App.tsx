// style
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";

// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//components
import FullSpinner from "@components/spinner/FullSpinner";

// test
// import TestTool from "./mocks/_components/TestTool";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <TestTool /> */}
      <ThemeProvider theme={theme}>
        <FullSpinner />
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
