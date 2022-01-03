import { combineReducers } from 'redux'; 
import { apiStartWars } from "./startWarsReducers"; 

export const rootReducer = combineReducers({
    StartWarsApi: apiStartWars, 
});