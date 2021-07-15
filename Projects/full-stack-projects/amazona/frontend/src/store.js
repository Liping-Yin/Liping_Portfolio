import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";

const initialState = {};
// const reducer = (state, action) => {
//   return { products: data.products };
// };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});
// this will enable bowser developer tools check states in redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
