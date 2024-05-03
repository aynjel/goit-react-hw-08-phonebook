import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
