import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import StudentDetails from './pages/StudentDetails.jsx';
import AddDetails from './pages/AddDetails.jsx';
import EditDetails from './pages/EditDetails.jsx';
import DeleteDetails from './pages/DeleteDetails.jsx';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<App/>}>
       <Route index={true} path='/' element={<HomePage />}/>  
       <Route path='/details' element={<StudentDetails />}/>  
       <Route path='/addDetails' element={<AddDetails />}/>  
       <Route path='/editDetails' element={<EditDetails />}/>  
       <Route path='/deleteDetails' element={<DeleteDetails />}/>  
    </Route>
  )
  
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
