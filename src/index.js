import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'

import Store from 'src/redux/store';
import App from 'src/components/App';

import 'src/sass/app.scss';

ReactDOM.render(
  <AppContainer>
    <Provider store={Store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);

if (DEVELOPMENT) { // eslint-disable-line
  module.hot.accept('src/components/App', () => { render(App)});
}
