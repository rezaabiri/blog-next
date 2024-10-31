import { useState } from 'react';
import {verify} from '../services/verifyService';
import { IVerifyModel } from '../models/verifyModel';
import {AxiosError} from "axios";
import {setTokens} from "@/core/sessionManager";

const useVerifyViewModel = () => {
    const [authData, setAuthData] = useState<IVerifyModel | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleVerify = async (phoneNumber: string, code: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await verify(phoneNumber, code);
            setTokens(data.result.access_token, data.result.refresh_token)
            console.log(data.result.toString())
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

    return { authData, loading, error, handleVerify };
};

export default useVerifyViewModel;
