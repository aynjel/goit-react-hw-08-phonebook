import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(register({ name, email, password })).then(result => {
      form.reset();
    });
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Register Form</h2>
        <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
          <label className={css.label}>
            Name
            <input type="text" name="name" className={css.input} required />
          </label>

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

          <button type="submit" className={css.button} aria-label="Register">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
