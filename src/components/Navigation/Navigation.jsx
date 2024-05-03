import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/hooks/useAuth';
import { UserMenu } from 'components/Usermenu/Usermenu';
import AuthNav from 'components/AuthNav/AuthNav';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        Home
      </NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};
