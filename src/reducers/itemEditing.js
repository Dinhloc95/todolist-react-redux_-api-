import * as types from './../constants/ActionTypes';

var initialState = {};
const itemEditing =(state = initialState, action)=>{
    switch(action.type){
        case types.EDIT_PRODUCT:
            return action.products;
        default: 
        return state;
    }
}

export default itemEditing;