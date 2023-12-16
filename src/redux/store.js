import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  account: {
    balance: 100,
  },
};
const rootReducer = (state = initialState, action) => {
  return state;
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};
