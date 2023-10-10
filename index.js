
const { createStore } = require("redux");

// constant define
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREAMENT_BY_VALUE = "INCREAMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

    // state
    // action
    // reducer
    // store


// 1 State
const initialState = {
    count :0,
}

const initialUsersState={
    users:[{name:"Salam"}]
}

// 2 Action - object- type and payload
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
    // Reset
    const resetCounter =()=>{
        return {
            type:RESET,

        }
    }

       // Add user by value
       const increamentCounterValue =(value)=>{
        return {
            type:INCREAMENT_BY_VALUE,   
            payload:value

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

    const counterReducer =(state=initialState,action)=>{
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
                case RESET :
                        return {
                            ...state,
                            count : 0
                        }
                case INCREAMENT_BY_VALUE :
                            return {
                                ...state,
                                count :state.count + action.payload
                            }

                        default :
                        state;
        }  

    }


    // 4 Store   
    //  methods 1. getState() 2. dispatch() 3. subscribe()

    const store = createStore(counterReducer);

    store.subscribe(()=>{
        console.log(store.getState())
    })

    // dispatch  action

     store.dispatch(incrementCounter())
    //  store.dispatch(incrementCounter())
    //  store.dispatch(incrementCounter())
    store.dispatch(increamentCounterValue(10))
     store.dispatch(resetCounter())
    // store.dispatch(decrementCounter())
  
    

   