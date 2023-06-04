import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Data from './components/Data';
import DataUpdate from './components/DataUpdate';
import DataAdd from './components/DataAdd';

function App() {
  //routing
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Data />,
      loader: ()=> fetch(`https://crud-managements.vercel.app/users`)
    },
    {
      path:'/users/add',
      element: <DataAdd />
    },
    {
      path:'/update/:id',
      element: <DataUpdate />,
      loader: ({params})=> fetch(`https://crud-managements.vercel.app/users/${params.id}`)
    }
  ])

  return (
    <div className=" max-w-[1000px] mx-auto">

    <RouterProvider router={router} />
    </div>
  );
}

export default App;
