import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './styles/Global.module.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
