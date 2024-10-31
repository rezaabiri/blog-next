import {useEffect, useState} from 'react';
import {getNotifications} from '../services/notificationService';
import { INotificationModel } from '../models/notificationModel';

const useNotificationViewModel = () => {
    const [notificationsData, setNotificationsData] = useState<INotificationModel | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const getNotification = async () => {
        setLoading(true);
        try {
            const data: INotificationModel = await getNotifications();
            setNotificationsData(data);
            setLoading(false)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error: unknown) {
            setError(true)
            setLoading(false);
        }
    };
    useEffect(() => {
        getNotification()
    }, [])

    return { notificationsData, loading, error, getNotification};
};

export default useNotificationViewModel;
