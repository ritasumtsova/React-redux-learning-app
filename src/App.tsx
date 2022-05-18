import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import BtnCounter from './components/BtnCounter';
import Input from './components/Input';
import Thunk from './components/Thunk';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BtnCounter />
        <Input />
        <Thunk />
      </Provider>
    </div>
  );
};

export default App;
