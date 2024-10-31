import axios, {AxiosResponse} from "axios";
import {IAuthModel} from "@/app/login/models/authModel";
import {clearTokens, getAccessToken, getRefreshToken, setTokens} from "@/core/sessionManager";

const axiosInstance = axios.create({
    baseURL: 'https://saalonia.ir/api/'
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken()
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = getRefreshToken()
            if (refreshToken) {
                try {
                    const  { data }: AxiosResponse<IAuthModel> = await axios.post('refresh-token', { refreshToken });
                    setTokens(data.result.access_token, data.result.refresh_token)
                    originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`;
                    return axiosInstance(originalRequest);
                } catch {
                    clearTokens()
                    window.location.href = '/login';
                }
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
