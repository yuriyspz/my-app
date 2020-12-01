import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { FormComponent } from './formComponent';
import { FormComponentFunc } from './formComponentFunc';
import { store } from './store';

function App() {
  return (
    <div className="App">
      {/* <FormComponentFunc title={'hello'}/> */}
      <Provider store={store}>
        <FormComponent />
      </Provider>
    </div>
  );
}

export default App;
