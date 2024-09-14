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
        };

        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(body),
        });

        const { token } = await response.json();

        if (token) {
            localStorage.setItem('test_token', token);
        }
    };

    return <button onClick={onClickHandler}>Login</button>;
};
