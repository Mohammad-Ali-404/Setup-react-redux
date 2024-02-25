import todosReducer from "./todos/reducer";
import filterReducer from "./filter/reducer";
import { combineReducers } from "redux";


const RootReducer = combineReducers({
    todos: todosReducer,
    filter : filterReducer
})
    
export default RootReducer;