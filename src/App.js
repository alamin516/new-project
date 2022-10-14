import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Phone from './components/Phone';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {path: '/', 
      element: <Home></Home>,
    loader: ()=> fetch('http://localhost:5000/phones')}
    ]},
    {path: '/phone/:id',
  element: <Phone></Phone>,
loader: ({params})=> fetch(`http://localhost:5000/phone/${params.id}`)}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
