import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import NavBar from 'components/NavBar/NavBar';

export const Layout = () => {
    const { isLoggedIn } = useAuth();
  return (
    <div className={css.container}>
  {isLoggedIn ? <UserMenu /> : <NavBar />}
      <Outlet />
    </div>
  );
};