import ACTIONS from '../action/action';


const initialState = {
    username:'test',
    password:'123'
}

const reducer = (state=initialState,action) => {

    switch (action.type) {
        case ACTIONS.types.SUBMIT_FORM:
            console.log("action",action)
            return action;
    }

}


export default reducer;
