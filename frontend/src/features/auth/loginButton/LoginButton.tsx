import { FC } from 'react';

import { BASE_URL } from '../../../../public/config';
import { User } from '../../../shared/types/user';

type LoginButtonProps = {
    login: string;
    password: string;
    setUserHandler: (user: User) => void;
};

export const LoginButton: FC<LoginButtonProps> = ({
    login,
    password,
    setUserHandler,
}) => {
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

        const { data, token } = await response.json();

        if (token) {
            document.cookie = `test_token=${token}`;

            setUserHandler(data);
        }
    };

    return <button onClick={onClickHandler}>Login</button>;
};
