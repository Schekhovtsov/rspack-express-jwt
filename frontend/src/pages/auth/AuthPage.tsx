import { useState } from 'react';
import { getToken } from '../../shared/utils/auth';
import { Login } from '../../widgets/auth/Login';
import { Register } from '../../widgets/auth/Register';
import { User } from '../../shared/types/user';

export const AuthPage = () => {
    const [user, setUser] = useState<User | null>(null);

    const fetchAdminPage = () => {
        fetch('http://localhost:3010/admin', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
    };

    const setUserHandler = (user: User) => {
        setUser(user);
    };

    return (
        <>
            <Register />
            <Login setUserHandler={setUserHandler} />

            {user?.role === 'admin' && (
                <>
                    <h1>Admin restricted pages</h1>
                    <div>
                        <button onClick={fetchAdminPage}>Admin page</button>
                    </div>
                </>
            )}
        </>
    );
};
