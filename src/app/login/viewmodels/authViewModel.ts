import { useState } from 'react';
import { login } from '../services/authService';
import { IAuthModel } from '../models/AuthModel';
import {AxiosError} from "axios";

const useAuthViewModel = () => {
    const [authData, setAuthData] = useState<IAuthModel | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (phoneNumber: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await login(phoneNumber);
            console.log(data)
            setAuthData(data);
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                console.error('Axios error:', err.response?.data || err.message);
            } else {
                console.error('Unexpected error:', err);
            }
        } finally {
            setLoading(false);
        }
    };

    return { authData, loading, error, handleLogin };
};

export default useAuthViewModel;
