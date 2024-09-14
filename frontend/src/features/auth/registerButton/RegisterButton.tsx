import { FC } from 'react';

import { BASE_URL } from '../../../../public/config';

type RegisterButtonProps = {
    login: string;
    password: string;
};

export const RegisterButton: FC<RegisterButtonProps> = ({
    login,
    password,
}) => {
    const onClickHandler = async () => {
        const body = {
            login: login,
            password: password,
            role: 1,
        };

        await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(body),
        });
    };

    return <button onClick={onClickHandler}>Register</button>;
};
