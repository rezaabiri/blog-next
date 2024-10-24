import React from 'react';
import Image from "next/image";

interface ISlideProduct {
    title: string,
    headLine: string,
    description: string,
    buyButtonLink: string,
    learnMoreButtonLink: string,
    image: string
}
const SliderCard = (props: ISlideProduct) => (
    <div className={'flex flex-row justify-between items-center bg-[#F9FAFB]'}>
        <div className={'flex flex-col mx-28'}>
            <label className={'text-sm text-[#47C1BF] mb-3'}>{props.title}</label>
            <h1 className={'font-extrabold text-3xl mb-3'}>{props.headLine}</h1>
            <desc className={'text-sm text-gray-400 leading-6'}>{props.description}</desc>
            <div className={'flex flex-row mt-4 gap-4'}>
                <button className={'rounded-sm px-6 py-1.5 bg-[#43467F] text-sm text-white'}>Buy Now</button>
                <button className={'rounded-sm px-6 py-1.5 border border-1 border-[#43467F] text-sm text-[#43467F]'}>Learn More</button>
            </div>
        </div>

        <Image src={props.image as string} alt={'product image'} width={500} height={300}/>
    </div>
);

export default SliderCard;