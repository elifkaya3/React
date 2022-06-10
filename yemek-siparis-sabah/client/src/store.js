import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllFoodsReducer } from "./reducers/FoodReducer";
import { cartReducer } from "./reducers/CartReducer";



const finalReducer = combineReducers({
  getAllFoodsReducer: getAllFoodsReducer,
  cartReducer:cartReducer
});

const initialState = {};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
