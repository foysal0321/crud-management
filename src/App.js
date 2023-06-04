import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';;
import Update from './components/Update';
import Item from './components/Item';
import AddItem from './components/AddItem';

function App() {
  //routing
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Item />,
      loader: ()=> fetch(`https://crud-managements.vercel.app/users`)
    },
    {
      path:'/users/add',
      element: <AddItem />
    },
    {
      path:'/update/:id',
      element: <Update />,
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
