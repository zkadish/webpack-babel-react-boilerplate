import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from 'src/redux/store';
import App from 'src/components/App';

import 'src/sass/app.scss';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if (DEVELOPMENT) { // eslint-disable-line
  module.hot.accept();
}
