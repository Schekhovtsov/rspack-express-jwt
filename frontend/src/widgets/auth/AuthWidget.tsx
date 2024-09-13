import { useState } from 'react';
import { Input } from '../../shared/ui/Input/Input';
import { RegisterButton } from '../../features/auth/registerButton/RegisterButton';

export const AuthWidget = () => {
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
      <Input value={login} onChange={onLoginChange} />
      <Input value={password} onChange={onPasswordChange} />
      <RegisterButton login={login} password={password} />
    </>
  );
};
