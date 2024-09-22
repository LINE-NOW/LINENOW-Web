// style
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";

// router
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";
import Modal from "@components/modal/Modal";
import Bottomsheet from "@components/bottomsheet/Bottomsheet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Modal />
        <Bottomsheet />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
