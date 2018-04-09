
//This is literally the initial state of our Redux store. We decide what it looks like from the get-go.
const initialState = {
    currentValue: 0
    // futureValues: [],
    // previousValues: [...initialState.previousValues, initialState.currentValue]
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';
// Convention for Constants is to have them ALL CAPS



//action: descriptor of how we want to update the store.
//It is simply an action.
export function increment(num) {
    return {
        type: INCREMENT,
        payload: num
    }
}
//This is an Action Creator (because it returns an action - an object)
//At some point in our react code, we will import this function and assign it to a button click.

export function decrement(num) {
    return {
        type: DECREMENT,
        payload: num
    }
}

export function undo() {
    return {
        type: UNDO,
        payload: 0
    }
}



// reducer takes in State (current) and the Action object

// State, assignment operator =, initialState, and an action.
//If state hasn't changed, we will return an unchanged state. (Default parameter)
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            //in case of INCREMENT, return a new object...
            //Brand new object literal with a matching key.
            //Value comes from the prior state plus whatever value is passed in.
            return {
                currentValue: state.currentValue + action.payload
            }
            // OR
            // return Object.assign({}, state, {currentValue: state.currentValue + action.payload})

        case DECREMENT:
            return {
                currentValue: state.currentValue - action.payload
            }
        
        default: 
            return state;
            //By default, if nothing matches, return state.

    }
}