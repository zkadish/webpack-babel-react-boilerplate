import React from 'react';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import Store from '../src/redux/store';
import './testHelper';

import App from '../src/components/App.js';
// import * as action from '../src/redux/actions/actions';

describe('The <App /> component', () => {
  it ('should render a div with the class "app-container"', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <Provider store={Store}>
        <App />
      </Provider>,
    );
    const appContainer = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'app-container');

    expect(appContainer).to.be.ok;
  });
});
