import { Login } from '../../widgets/auth/Login';
import { Register } from '../../widgets/auth/Register';

export const AuthPage = () => {
  const fetchUsersPage = () => {
    fetch('http://localhost:3010/user', {
      method: 'GET',
    });
  };

  const fetchAdminPage = () => {
    fetch('http://localhost:3010/admin', {
      method: 'GET',
    });
  };

  //
  // Полученный токен нужно хранить в куках
  // И прикручивать его к каждому запросу

  return (
    <>
      <Register />
      <Login />
      <a onClick={fetchUsersPage}>Users page</a>
      <a onClick={fetchAdminPage}>Admin page</a>
    </>
  );
};
