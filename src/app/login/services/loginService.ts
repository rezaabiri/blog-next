import axiosInstance from "@/core/axiosInstance";
import {AxiosResponse} from "axios";
import {ILoginModel} from "@/app/login/models/loginModel";

export const login = async (phoneNumber: string): Promise<ILoginModel> => {
    const response: AxiosResponse = await axiosInstance.post<ILoginModel>('login', { 'phone':phoneNumber });
    return response.data;
};
