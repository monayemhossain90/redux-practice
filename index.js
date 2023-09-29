

const { createStore } = require("redux")
// const define
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

    // state
    // action
    // reducer
    // store


// 1 State
const initialCounterState = {
    count :0,
}

const initialUsersState={
    users:[{name:"Salam"}]
}

// 2 Action - type and payload
    // increment
    const incrementCounter =()=>{
        return {
            type:INCREMENT,

        }
    }

    // decreament
    const decrementCounter =()=>{
        return {
            type:DECREMENT,

        }
    }

      // Add User
      const addUser =()=>{
        return {
            type: ADD_USER,
            payload:{name:'manha'}

        }
    }

// 3  create reducer for counter

    const counterReducer =(state=initialCounterState,action)=>{
        switch (action.type){
            case INCREMENT :
                return {
                    ...state,
                    count : state.count + 1
                }
                case DECREMENT :
                    return {
                        ...state,
                        count : state.count - 1
                    }
                
        }  

    }


    // 4 Store   3 methods 1. getState() 2. dispatch() 3. subscribe()

    const store = createStore(counterReducer);

    store.subscribe(()=>{
        console.log(store.getState())
    })

    // dispatch  action

    store.dispatch(incrementCounter())
    store.dispatch(decrementCounter())
  
    

   