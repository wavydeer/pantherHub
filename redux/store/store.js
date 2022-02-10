import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {authReducer} from "../reducers/index"

const RootReducers = combineReducers({
    // Reducers
    authReducer,

})
export const store = createStore(
    RootReducers,
    applyMiddleware(thunk)
)