import { getCookie } from './cookies';

export const getToken = () => {
    return getCookie('test_token');
};
