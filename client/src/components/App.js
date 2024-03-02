import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/dashboard', element: <Dashboard /> },
]);

function App() {
  return (
    <div className='App'>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
