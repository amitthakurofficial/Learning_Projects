const initialState=  {
    todos:[
        {id:0,text:'Learn React', completed:true},
        {id:1,text:'Learn Javascript',completed:false}
    ],
    filters: {
        status:'All',
        colors:[]
    }
}


export default function appReducer (state=initialState,action) {
    switch(action.type) {
        case 1:
            return {
                state
            }
        default:
            return state;
    }
}