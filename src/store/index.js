import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from 'redux-thunk'; 
import { targetReducer } from "./reducers/target.reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    targetModule: targetReducer,
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

window.myStore = store
