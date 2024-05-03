import { useSelector } from 'react-redux';
// prettier-ignore
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from '../auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
