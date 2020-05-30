import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import ContactManager from './components/ContactManager'
import reducer from './reducers'


const store = createStore(reducer);


function App(){
  return (
    <div className="App">
      <div>
      	<Provider store={store}>
        	<ContactManager/>
        </Provider>
      </div>
    </div>
  );
}

export default App;
