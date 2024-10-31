import { useState } from 'react';
import {verify} from '../services/verifyService';
import { IVerifyModel } from '../models/verifyModel';
import {setTokens} from "@/core/sessionManager";
import {useRouter} from "next/navigation";

const useVerifyViewModel = () => {
    const [authData, setAuthData] = useState<IVerifyModel | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleVerify = async (phoneNumber: string, code: string) => {
        setLoading(true);
        try {
            const data = await verify(phoneNumber, code);
            setTokens(data.result.access_token, data.result.refresh_token)
            setAuthData(data);
            router.push('/notifications')

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: unknown) {
            setLoading(false);
        }
    };

    return { authData, loading, handleVerify };
};

export default useVerifyViewModel;
