import { useState } from 'react';
import { Input } from '../../shared/ui/Input/Input';
import { LoginButton } from '../../features/auth/loginButton/LoginButton';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      <Input value={login} onChange={onLoginChange} placeholder="Login" />
      <Input
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <LoginButton login={login} password={password} />
    </>
  );
};
