import Cookies from 'js-cookie';

export const setTokens = (accessToken, refreshToken) => {
    Cookies.set('accessToken', accessToken, { expires: 20 / (24 * 60), secure: true, sameSite: 'Strict', httpOnly: true });

    Cookies.set('refreshToken', refreshToken, { expires: 6, secure: true, sameSite: 'Strict', httpOnly: true });
};

export const clearTokens = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
};

export const getAccessToken = () => {
    return Cookies.get('accessToken');
};

export const getRefreshToken = () => {
    return Cookies.get('refreshToken');
};
