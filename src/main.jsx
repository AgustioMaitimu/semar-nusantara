import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import Appointment from './pages/Appointment.jsx';
import Collections from './pages/Collections.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/semar-nusantara/',
    element: <App />,
  },
  {
    path: '/semar-nusantara/collections/',
    element: <Collections />,
  },
  {
    path: '/semar-nusantara/appointment/',
    element: <Appointment />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
