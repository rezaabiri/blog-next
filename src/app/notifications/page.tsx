'use client'
import useNotificationViewModel from "@/app/notifications/viewmodels/notificationViewModel";
import {NotificationResult} from "@/app/notifications/models/notificationModel";
import Image from "next/image";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import useIsMobile from "@/utils/useIsMobile";

const Page = () => {
    const { notificationsData, loading, error, getNotification } = useNotificationViewModel();
    const isMobile = useIsMobile();
    const router = useRouter();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('loggedIn') ?? '';
        if(isLoggedIn === 'false' || isLoggedIn === ''){
            router.push('login')
        }
    }, [router])
    return (
        <div className={'flex flex-col justify-center items-center p-6 lg:p-12'}>
            {
                loading ? <p>loading ...</p> :
                notificationsData?.result.map((notification) => {
                    return (
                        isMobile ? notificationCard(notification) : notificationCardDesktop(notification)
                    )
                })
            }

            {
                error ? <p>error</p> : ""
            }
            {loading ? <></> : <button className={'mt-6'} onClick={getNotification}>Request</button>}
        </div>
    )
}


const notificationCard = (props: NotificationResult) => (
    <div key={props.id} className={'w-full h-auto rtl bg-white flex flex-col rounded-lg drop-shadow-lg p-3'}>
        <label className={'text-xl font-extrabold'}>{props.title}</label>
        <p className={'mt-2'}>{props.date}</p>
        <Image
            className={'mt-3 rounded-lg'}
            src={props.image as string}
            alt={'image'}
            width={500}
            height={50}
        />
        <p className={'mt-3'}>{props.body}</p>

    </div>
);
const notificationCardDesktop = (props: NotificationResult) => (
    <div key={props.id} className={'w-full h-auto rtl bg-white flex flex-row rounded-lg drop-shadow-lg p-3 gap-12'}>
        <div className={'flex flex-col'}>
            <label className={'text-xl font-extrabold'}>{props.title}</label>
            <p className={'mt-2'}>{props.date}</p>
            <p className={'mt-3'}>{props.body}</p>
        </div>

        <Image
            className={'mt-3 rounded-lg'}
            src={props.image as string}
            alt={'image'}
            width={500}
            height={50}
        />

    </div>
);

export default Page;