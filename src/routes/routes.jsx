// routes.jsx
import { createBrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import App from '../App';
import HomePage from '../pages/HomePage';
import CreateBlogPage from '../pages/CreateBlogPage'  // Assuming you have an AdminPanel component
import LoginComponent from "../components/LoginComponent"
import StudentList from '../pages/StudentList';
import Documen from '../pages/Documen';
import TeamCreate from '../pages/TeamCreate';
import CreateQuestion from "../pages/CreateQuestion"
import CreateCarusel from "../pages/CreateCarusel";
import CreateService from "../pages/CreateService"
import Cert from '../pages/Cert';
import Account from '../pages/Account';
import Branch from '../pages/Branch';
import UpdateSeson from "../pages/UpdateSeson"
import PlayListAdd from "../pages/PlaylistAdd"
import Certificate from '../pages/Cretificate';
import CreateBrand from '../pages/CreateBrand';
import CertificateSecend from '../pages/CertificateSecend';
import WorkTop from '../component/WorkTop';
import WorkPage from '../pages/WorkPage';
import ProductivityPage from '../pages/ProductivityPage';
import ReveiwPage from '../pages/ReveiwPage';
import FeatcherPage from '../pages/FeatcherPage';
const PrivateRoute = ({ element }) => {
  const { state } = useAuth();
  return state.isAuthenticated ? element : <Navigate to="/login" replace />;
};

const routesConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path:"/work-top",
        element: <PrivateRoute element={<WorkPage />} />,
      },
      {
        path:"/productivity",
        element: <PrivateRoute element={<ProductivityPage />} />,
      },
      {
        path:"/reveiw",
        element: <PrivateRoute element={<ReveiwPage />} />,

      },
      {
        path:"/featcher",

        element: <PrivateRoute element={<FeatcherPage />} />,

      },
      {
        path:"/create-crusel",
        element: <PrivateRoute element={<CreateCarusel />} />,

      },
      {
        path:"/create-video",
        element: <PrivateRoute element={<PlayListAdd/>} />,

      },
      {
        path:"/create-certificate",
        element: <PrivateRoute element={<Certificate/>} />,

      },
      {
        path:"/create-brand",
        element: <PrivateRoute element={<CreateBrand/>} />,

      },
      
      {
        path:"/create-service",
        element:<PrivateRoute element={<CreateService />} />
      },

      {
        path:"/create-question",
        element: <PrivateRoute element={<CreateQuestion />} />,

      },
      {
        path: '/students',
        element: <PrivateRoute element={<StudentList />} />,
      },
      {
        path: '/create-blog',
        element: <PrivateRoute element={<CreateBlogPage />} />,
      },
      {
        path: '/accounts',
        element: <PrivateRoute element={<div>Account Page</div>} />,
      },

      {
        path: '/documentation',
        element: <PrivateRoute element={<Documen/>} />,
      },
      // ... other routes
    ],
  },
  {
    path: '/login',
    element: <LoginComponent />,
  },
  {
    path: '/certsec',
    element: <CertificateSecend />,
  },
];

const routes = createBrowserRouter(routesConfig);

export default routes;
