import { useState } from 'react';
import { Input } from '../../shared/ui/Input/Input';
import { RegisterButton } from '../../features/auth/registerButton/RegisterButton';

export const Register = () => {
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
            <h1>Register</h1>
            <Input value={login} onChange={onLoginChange} placeholder="Login" />
            <Input
                value={password}
                onChange={onPasswordChange}
                placeholder="Password"
            />
            <RegisterButton login={login} password={password} />
        </>
    );
};
