import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Routes} from "./components/Routes";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './components/store'
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./components/theme";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <Routes/>
          </Provider>
      </ThemeProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
