import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Loader from '../Loader/Loader';

const PublicRoute = () => {
  const { isLoggedIn, token } = useAuth();

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;