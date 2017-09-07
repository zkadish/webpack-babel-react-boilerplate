// notes: some helful link about mocha-webpack and using mocha with react
// http://randycoulman.com/blog/2016/03/22/testing-with-mocha-and-webpack/

import jsdom from 'jsdom';
import chai from 'chai';

const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

Object.keys(window).forEach((key) => {
  if (!(key in window)) {
    global[key] = window[key];
  }
});
