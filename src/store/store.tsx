import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import configReducer from "../reducer";

const reducer = combineReducers({
    app: configReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
