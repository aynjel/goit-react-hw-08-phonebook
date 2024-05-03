import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      &copy; {new Date().getFullYear()} goit-react-hw-08-phonebook
    </footer>
  );
};

export default Footer;
