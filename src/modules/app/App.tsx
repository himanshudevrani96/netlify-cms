import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../shared/styles/theme";
import { GlobalStyles } from "../../shared/styles/GlobalStyles";
import Routing from "../../routes/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../shared/services/store";
import { useEffect } from "react";
import { eagerConnection } from "../../wallets/helpers/EagerConnect";

function App() {
  useEffect(() => {
    eagerConnection();
  }, []);

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Routing />
          <ToastContainer limit={1} />
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
