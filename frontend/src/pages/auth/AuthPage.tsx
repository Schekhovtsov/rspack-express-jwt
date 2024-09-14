import { Login } from '../../widgets/auth/Login';
import { Register } from '../../widgets/auth/Register';

export const AuthPage = () => {
    const fetchAdminPage = () => {
        fetch('http://localhost:3010/admin', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('test_token')}`,
            },
        });
    };

    return (
        <>
            <Register />
            <Login />
            <h1>Links to pages</h1>
            <div>
                <button onClick={fetchAdminPage}>Admin page</button>
            </div>
        </>
    );
};
