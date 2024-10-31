// src/services/verifyService.ts
import {IVerifyModel} from '../models/verifyModel';
import axiosInstance from "@/core/axiosInstance";
import {AxiosResponse} from "axios";

export const verify = async (phoneNumber, code): Promise<IVerifyModel> => {
    const response: AxiosResponse = await axiosInstance.post<IVerifyModel>('verify', {
        'phone': phoneNumber,
        'code': code
    });
    return response.data;
};
