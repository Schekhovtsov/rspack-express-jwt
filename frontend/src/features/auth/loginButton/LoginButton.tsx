import { FC } from 'react';

import { BASE_URL } from '../../../../public/config';

type LoginButtonProps = {
  login: string;
  password: string;
};

export const LoginButton: FC<LoginButtonProps> = ({ login, password }) => {
  const onClickHandler = async () => {
    const body = {
      login: login,
      password: password,
      user_type_id: 1,
    };

    await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    });
  };

  return <button onClick={onClickHandler}>Login</button>;
};
