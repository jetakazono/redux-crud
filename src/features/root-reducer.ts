import { combineReducers } from "redux"
import userReducer from "./Users"

const rootReducer = combineReducers({ userReducer })

export default rootReducer
