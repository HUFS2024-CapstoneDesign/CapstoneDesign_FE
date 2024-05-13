import './App.css';
import health from './modules/health.js';
import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension'
import { ThemeProvider } from 'styled-components';
import theme from './global/theme.js';
import router from './routes/router.js';
import GlobalStyle from './global/global.js';
import { RouterProvider } from 'react-router';


const store = createStore(health, devToolsEnhancer())
function App() {
  return (
  <>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
  </>
  );
}

export default App;
