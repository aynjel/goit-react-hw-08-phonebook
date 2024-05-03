import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'feature/auth/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>
  );
};

export default LoginPage;
