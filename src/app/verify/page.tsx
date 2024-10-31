'use client'

import React, {useState} from 'react';
import Input from "@/app/components/global_components/input";
import Button from "@/app/components/global_components/button";
import useVerifyViewModel from "@/app/verify/viewmodels/verifyViewModel";

const Page = () => {
    const { authData, loading, error, handleVerify } = useVerifyViewModel();
    const [verifyCode, setVerifyCode] = useState('');

    return (
        <div className={'flex justify-center items-center  p-6 lg:p-12'}>
            <div
                className={'flex flex-col lg:flex-row lg:w-[80%] h-[80%] bg-white justify-start items-start rounded-lg drop-shadow-lg p-6'}>
                <div className={'flex order-2 lg:order-1 lg:mr-16 flex-col lg:w-1/2 justify-center'}>
                    <label>
                        Welcome Back 👋
                    </label>
                    <p className={'my-8'}>
                        Code sent to {localStorage.getItem('phone')}
                    </p>
                    <Input
                        label={"Verify Code"}
                        placeHolder={"Enter verify code"}
                        value={verifyCode}
                        onChange={setVerifyCode}
                    />
                    {loading ? <p>loading...</p> :
                        <Button className={'mt-6'} label={"Login"} onClick={() => { handleVerify(localStorage.getItem('phone'), verifyCode)}}/>
                    }
                    {error ? <p>{error}</p> : console.log(authData)}


                </div>
                <div
                    className={'flex flex-col order-1 lg:order-2 w-full lg:w-1/2 py-20 mb-6 lg:py-60 justify-center items-center rounded-lg bg-blue-200'}>
                </div>


            </div>

        </div>
    )
}

export default Page;