import axios, {AxiosResponse} from "axios";
import {clearTokens, getAccessToken, getRefreshToken, setTokens} from "@/core/sessionManager";
import {toast} from "react-toastify";
import {IVerifyModel} from "@/app/verify/models/verifyModel";
import {generateToken} from "@/core/tokenService";

const axiosInstance = axios.create({
    baseURL: 'https://saalonia.ir/api/'
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken() ?? generateToken("api/" + config.url);
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

const config: { headers: { Authorization: string } } = {
    headers: {
        Authorization: `Bearer ${generateToken('api/refreshToken')}`
    }
}
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error?.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = getRefreshToken();
            if (refreshToken) {
                try {
                    const { data }: AxiosResponse<IVerifyModel> = await axios.post(
                        'https://saalonia.ir/api/refreshToken',
                        { refreshToken },
                        config
                        );
                    setTokens(data.result.access_token, data.result.refresh_token);
                    originalRequest.headers.Authorization = `Bearer ${getAccessToken() ?? generateToken("api/refreshToken")}`;
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    clearTokens();
                    toast.error("لطفا جهت امنیت بیشتر دوباره وارد شوید.");
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 5200);
                    return Promise.reject(refreshError);
                }
            }
        } else if (error.response?.status === 403) {
            clearTokens();
            toast.error("لطفا جهت امنیت بیشتر دوباره وارد شوید.");
            setTimeout(() => {
                window.location.href = '/login';
            }, 5200);
        } else if (error.response?.status === 406) {
            toast.error(error.response?.data?.message);
        } else {
            toast.error("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
        }
        return Promise.reject(error);
    }
);
export default axiosInstance;
