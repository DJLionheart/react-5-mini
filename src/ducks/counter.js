
//This is literally the initial state of our Redux store. We decide what it looks like from the get-go.
const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
}




//reducer takes in State (current) and the Action object

// State, assignment operator =, initialState, and an action.
//If state hasn't changed, we will return an unchanged state. (Default parameter)
export default function reducer(state = initialState, action) {
    return state;
}