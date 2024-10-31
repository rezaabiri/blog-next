import Cookies from 'js-cookie';

export const setTokens = (accessToken : string, refreshToken : string) => {
    localStorage.setItem('loggedIn', JSON.stringify(true));
    Cookies.set('accessToken', accessToken, { expires: 20 / (24 * 60), secure: true, sameSite: 'Strict'});
    Cookies.set('refreshToken', refreshToken, { expires: 6, secure: true, sameSite: 'Strict'});
};

export const clearTokens = () => {
    localStorage.setItem('loggedIn', JSON.stringify(false))
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
};

export const getAccessToken = () => {
    return Cookies.get()['accessToken'];
};

export const getRefreshToken = () => {
    return Cookies.get()['refreshToken'];
};
