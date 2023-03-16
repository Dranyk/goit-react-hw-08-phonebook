import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Loader from '../Loader/Loader';

const PrivateRoute = () => {
  const { isLoggedIn, token } = useAuth();

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;