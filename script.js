// state
// action
// reducer
// store

const { createStore } = require("redux");

const INCREMENT ="INCREMENT";

//  state
const initialCounterState ={
    count : 0,
}

// action

const increamentCounter = ()=>{

    return {
        type:INCREMENT,
    }
}

// Reducer

const counterReducer = (state=initialCounterState,action)=>{
    switch (action.type) {
        case INCREMENT:
            
            return{
                ...state,
                count : state.count + 1
            }
    
       
    }

}

const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(increamentCounter())