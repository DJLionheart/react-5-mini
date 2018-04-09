import React, { Component } from "react";
import { connect } from 'react-redux';

import { increment, decrement } from './ducks/counter';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ this.props.currentValue }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => this.props.increment(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => this.props.increment(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => this.props.decrement(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => this.props.decrement(5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ true }
              onClick={ () => null }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ true }
              onClick={ () => null }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>

            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}

// Invoke connect twice. On the second invocation, pass App (the component) in.

//Pattern called decoration.
//That means we're adding functionality... In this case, the ability to interact with Redux Store

//Don't overthink this... You are mapping the Global Redux Store state to props.

//The mapStateToProps function is just a description of what we want from Store.
//If you want to access multiple pieces from the Store, specify in the return portion of mapStateToProps.
function mapStateToProps(state) {
  
  return {
    currentValue: state.currentValue
    //This is how you pull values in from the Store.
    //If you ever want to update a value: 
  };
}
// Connect is how we subscribe to the Store.
//Once we've connected, THEN we can use the mapStateToProps method.
export default connect(mapStateToProps, {increment, decrement})(App);
//By giving an action creator in bracket to the connect decorator, it will give us a connected version of the action creator.
//Now, instead of invoking increment, we can invoke this.props.increment and it will update the Store.

/*

Or we could do it this way:

let decorator = connect(whatToGetFromStore)

export default decorator(App)
*/