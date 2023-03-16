import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';
import HomeIcon from '@mui/icons-material/Home';

export const NavBar = () => {
  return (
    <Box className={css.header}>
         <NavLink to="/" className={css.link_home}>
        <HomeIcon />
      </NavLink>
      <div  className={css.nav}>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
      </div>
   
    </Box>
  );
};

export default NavBar;