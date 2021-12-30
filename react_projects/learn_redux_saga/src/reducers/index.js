import { ADD_TODO} from  '../actions/index'

const initialState = {
    toDoList : []
}

export default function toDoApp(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            let newToDoList = [
                ...state.toDoList,
                {
                    ...action.toDoItem
                }
            ];
            return {
                ...state,
                toDoList : newToDoList
            };
            default :
            return state;
    }
}