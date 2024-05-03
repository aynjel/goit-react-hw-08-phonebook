import { useDispatch } from 'react-redux';
import { useAuth } from '../../redux/hooks/useAuth';
import { logOut } from '../../redux/auth/authOperations';
import css from './Usermenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userMenu}>
      <span className={css.name}>Welcome, {user.name}</span>
      <button type="button" onClick={handleLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
};
