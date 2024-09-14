import { FC, useState } from 'react';
import { Input } from '../../shared/ui/Input/Input';
import { LoginButton } from '../../features/auth/loginButton/LoginButton';
import { User } from '../../shared/types/user';

type LoginProps = {
    setUserHandler: (user: User) => void;
};

export const Login: FC<LoginProps> = ({ setUserHandler }) => {
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
            <LoginButton
                login={login}
                password={password}
                setUserHandler={setUserHandler}
            />
        </>
    );
};
