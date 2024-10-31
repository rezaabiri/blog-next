// src/services/authService.ts
import { IAuthModel } from '../models/AuthModel';
import axiosInstance from "@/core/axiosInstance";
import {AxiosResponse} from "axios";

export const login = async (phoneNumber): Promise<IAuthModel> => {
    const response: AxiosResponse = await axiosInstance.post<IAuthModel>('login', { 'phone':phoneNumber });
    return response.data;
};
