import { useState } from 'react';
import { login } from '../services/loginService';
import { ILoginModel } from '../models/loginModel';

const useAuthViewModel = () => {
    const [authData, setAuthData] = useState<ILoginModel | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (phoneNumber: string) => {
        setLoading(true);
        setError(null);
        try {
            const data:ILoginModel = await login(phoneNumber);
            setAuthData(data);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err: unknown) {
            setLoading(false);
            setError('err')
        }
    };

    return { authData, loading, error, handleLogin };
};

export default useAuthViewModel;
