'use client'

import React, {useEffect, useState} from 'react';
import Input from "@/app/components/global_components/input";
import Button from "@/app/components/global_components/button";
import useAuthViewModel from "@/app/login/viewmodels/loginViewModel";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const Page = () => {
    const { authData, loading, error, handleLogin } = useAuthViewModel();
    const [phone, setPhone] = useState('');
    const router:AppRouterInstance = useRouter()
    useEffect(() => {
        if(authData) router.push('verify');
    }, [authData, router])
    return (
        <div className={'flex justify-center items-center content-center h-screen p-6 lg:p-12'}>
            <div
                className={'flex flex-col lg:flex-row w-full lg:w-[80%] h-auto bg-white justify-center items-center rounded-lg drop-shadow-[0_0_5px_rgba(0,0,0,0.12)] p-6'}>
                <div className={'flex order-2 lg:order-1 lg:mr-16 flex-col w-full lg:w-1/2 justify-center'}>
                    <label className={'mt-4 lg:mt-0'}>
                        Welcome Back 👋
                    </label>
                    <p className={'my-8'}>
                        Today is a new day. Its your day. You shape it.
                        Sign in to start managing your projects.
                    </p>
                    <Input
                        label={"Phone Number"}
                        placeHolder={"Enter your phone number"}
                        value={phone}
                        onChange={setPhone}
                    />
                    {loading ? <p>loading...</p> :
                        <Button className={'mt-6'} label={"Login"} onClick={() => {
                            handleLogin(phone)
                            localStorage.setItem('phone', phone)
                        }}/>
                    }
                    {error ? <p>{error}</p> : <p></p>}
                    {/*{error ? <p>{error}</p> : router.push('/verify')}*/}


                </div>
                <div className={'flex flex-col order-1 lg:order-2 w-full lg:w-1/2 py-20 ' +
                        'lg:py-40 justify-center items-center rounded-lg bg-blue-200'}>
                    <label className={'font-extrabold text-2xl'}>
                        Login to NextShop
                    </label>
                </div>


            </div>

        </div>
    )
}

export default Page;