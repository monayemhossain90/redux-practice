const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// constant  define
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";



// states

const initialProductsState = {
    products :["laptop", "microphone"],
    numberOfProducts:2,
}

// actions

const addProductsAction =(product)=>{
    return {
        type:ADD_PRODUCTS,
        payload:product,
    }
}

const getProductAction = ()=>{
    return {
        type:GET_PRODUCTS,
    }
}

// reducers

const productReducer =(state =initialProductsState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            
        return {
            ...state
        }

        case ADD_PRODUCTS:
            
        return {
            products:[...state.products,action.payload],
           
            numberOfProducts :state.numberOfProducts + 1,

        }    
    
        
    }


}

// stores

   const store =createStore(productReducer,applyMiddleware(logger));

   store.subscribe(()=>{
    console.log(store.getState())
   })


 store.dispatch(addProductsAction("tab"));
 store.dispatch(getProductAction());
