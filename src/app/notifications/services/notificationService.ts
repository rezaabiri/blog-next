// src/services/verifyService.ts
import {INotificationModel} from '../models/notificationModel';
import axiosInstance from "@/core/axiosInstance";
import {AxiosResponse} from "axios";

export const getNotifications = async (): Promise<INotificationModel> => {
    const response: AxiosResponse = await axiosInstance.post<INotificationModel>('get-notifications');
    return response.data;
};
