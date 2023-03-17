
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <Box className={css.box}>
      <p className={css.name}>{user.name}</p>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={handleLogOut}
        className={css.btn}
      >
        <LogoutIcon />
      </Button>
    </Box>
  );
};