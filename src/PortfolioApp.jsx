import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './store/stores';


const PortfolioApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter/>
    </Provider>
  )
}

export default PortfolioApp