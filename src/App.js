import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './router/AppRouter';
import "bootswatch/dist/sketchy/bootstrap.min.css";


const App = () => {
  return (
    <Provider store={store}> 
        <AppRouter /> 
    </Provider >
  );
}

export default App;