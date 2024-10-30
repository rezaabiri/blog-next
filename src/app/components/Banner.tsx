import React from 'react';
import Image from "next/image";

interface IBannerProps {
    title: string,
    headLine: string,
    description: string,
    buyButtonLink: string,
    discountPercentage: string,
    image: string
}
const Banner = (props: IBannerProps) => (
    <div className={'flex flex-col sm:flex-col lg:flex-row justify-evenly mx-8 lg:mx-28 items-center rounded-md bg-[#EDF9F9]'}>

        <Image className={'pt-4 lg:p-0'} src={props.image as string} alt={'product image'} width={300} height={300}/>

        <div className={'flex flex-col w-full p-4 lg:w-1/3'}>
            <label className={'text-sm text-[#47C1BF] mb-3'}>{props.title}</label>
            <h1 className={'font-extrabold text-3xl mb-3'}>{props.headLine}</h1>
            <p className={'text-sm text-gray-400 leading-6'}>{props.description}</p>
            <div className={'flex flex-row mt-4 gap-4'}>
                <button className={'rounded-sm px-6 py-1.5 bg-[#47C1BF] text-sm text-white'}>Buy Now</button>
                <label className={'rounded-sm px-6 py-1.5 text-sm text-[#43467F] overline'}>{props.discountPercentage}</label>
            </div>
        </div>

    </div>
);

export default Banner;