import jsdom from 'jsdom';
import chai from 'chai';

const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
// const doc = window.document;

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

Object.keys(window).forEach((key) => {
  if (!(key in window)) {
    global[key] = window[key];
  }
});
