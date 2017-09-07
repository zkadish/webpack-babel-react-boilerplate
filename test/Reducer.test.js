import reducer from 'src/redux/reducers/reducer';
import { expect } from 'chai';
import * as action from 'src/redux/actions/actions';

describe('reducer', () => {
  describe('INCREMENT', () => {
    it('should increase value by 1 when dispatched', () => {
      const initialState = 0;
      const nextState = reducer(initialState, action.increment());
      expect(nextState).to.deep.equal(1);
    });
  });

  describe('DECREMENT', () => {
    it('should decrease value by 1 when dispatched', () => {
      const initialState = 0;
      const nextState = reducer(initialState, action.decrement());
      expect(nextState).to.does.equal(-1);
    });
  });
});
