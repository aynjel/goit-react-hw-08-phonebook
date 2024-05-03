import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'feature/auth/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  );
};

export default RegisterPage;
