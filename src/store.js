import { createStore } from "redux";
import reducer from './reducer';
// import json loader
import data from './movies-data.json'

const store = createStore(reducer, data.categories , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;