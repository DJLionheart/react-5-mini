import { createStore } from 'redux';
import reducer from './ducks/counter';

//exporting by default the created store.
export default createStore(reducer);