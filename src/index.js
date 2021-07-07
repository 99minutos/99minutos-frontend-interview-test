import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ConfigAPollo from './Apollo/Config';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

//css
import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
    <ConfigAPollo>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ConfigAPollo>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//0xd51a58de7a2bb0fce0ed027ff000178843c2622c8f478003c70d75f76d22f427
