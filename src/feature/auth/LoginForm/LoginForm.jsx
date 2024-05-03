import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(login({ email, password })).then(result => {
      form.reset();
    });
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Login Form</h2>
        <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
          <label className={css.label}>
            Email
            <input type="email" name="email" className={css.input} required />
          </label>

          <label className={css.label}>
            Password
            <input
              type="password"
              name="password"
              className={css.input}
              required
            />
          </label>

          <button type="submit" className={css.button} aria-label="Login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
