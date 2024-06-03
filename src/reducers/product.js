import  * as types from './../constants/ActionTypes';
var initialState = [];
function findIndex (products,id){
    var result = -1;
    
      if(products.id === id){
        result = id ;
      }
 
    return result;
  }
const products = (state = initialState, action)=>{
    var {id, products} = action;
    switch(action.type){
        case types.FETCH_PRODUCTS:
            
            state = action.products;
           // console.log(state);
            return [...state];
            case types.DELETE_PRODUCT:
                var index = findIndex (state,id);
                    if(index!== -1){
                        state.splice(index,1);
                    }
                    return [...state];
            case types.ADD_PRODUCT:
                    state.push(action.products);
                return [...state];
            case types.UPDATE_PRODUCT:
                index = findIndex(state,products.id);
                state[index] = products;

                return [...state];


        default:  return [...state];
    }
};
export default products;