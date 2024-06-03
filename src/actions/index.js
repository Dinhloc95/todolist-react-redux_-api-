import * as types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
//action call api from server
export const actFetchProductsApi = ()=> {
    return (dispatch) =>{
        return callApi('products','GET',null).then(res=>{
            dispatch(actFetchProducts(res.data))
        });
    };
}
export const actFetchProducts = (products)=> {
    return {
        type: types.FETCH_PRODUCTS,
        products: products
    }
}

export const actDeleteProducts = (products)=> {
    return {
        type: types.DELETE_PRODUCT,
        products: products
    }
}

export const actDeleteProductsApi = (id)=> {
    return (dispatch) =>{
        return callApi(`products/${id}`,'DELETE',null).then(res=>{
            dispatch(actDeleteProducts(res.data))
        });
    };
}

export const actAddProducts = (products)=> {
    return {
        type: types.ADD_PRODUCT,
        products: products
    }
}

export const actAddProductsApi = (product)=> {
    return (dispatch) =>{
        return callApi('products','POST',product).then(res=>{
            dispatch(actAddProducts(res.data));
            
        });
    }
}
export const actUpdateProducts = (products)=> {
    return {
        type: types.UPDATE_PRODUCT,
        products: products
    }
}

export const actUpdateProductsApi = (product)=> {
    return (dispatch) =>{
        return callApi(`products/${product.id}`,'PUT',product).then(res=>{
            dispatch(actUpdateProducts(res.data));
            
        });
    }
}

export const actGetProductsStore = (products)=> {
    return {
        type: types.EDIT_PRODUCT,
        products: products
    }
}
export const actGetProductsApi = (id)=> {
    return dispatch =>{
        return callApi(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProductsStore(res.data));
            
        });
    }
}
