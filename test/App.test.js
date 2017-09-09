import React from 'react';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import Store from '../src/redux/store';
import './testHelper';

import App from '../src/components/App.js';

describe('The <App /> component', () => {
  const component = ReactTestUtils.renderIntoDocument(
    <Provider store={Store}>
      <App />
    </Provider>,
  );
  const Buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
  const Value = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'value');

  it ('should render a div with the class "app-container"', () => {
    const appContainer = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'app-container');
    expect(appContainer).to.be.ok;
  });

  it('should render an increment and decremnent button', () => {
    expect(Buttons).to.be.an('array');
    expect(Buttons).to.have.lengthOf(2);
    expect(Buttons[0].innerHTML).to.equal('increment');
    expect(Buttons[1].innerHTML).to.equal('decrement');
  });

  it('shoule render a div with the class "value"', () => {
    expect(Value).to.be.ok;
  })
  
  describe('when the increment button is clicked', () => {
    it('Value should increase', () => {
      const value = Number(Value.innerHTML);
      ReactTestUtils.Simulate.click(Buttons[0]);
      expect(Number(Value.innerHTML)).to.be.above(value);
    });
  });

  describe('when the decrement button is clicked', () => {
    it('value should decrease', () => {
      const value = Number(Value.innerHTML);      
      ReactTestUtils.Simulate.click(Buttons[1]);
      expect(Number(Value.innerHTML)).to.be.below(value);
    });
  });
});
