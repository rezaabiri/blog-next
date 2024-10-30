import React from 'react';
import Image from "next/image";
import car from '../../../assets/icons/car.svg'
import money from '../../../assets/icons/money.svg'
import headphone from '../../../assets/icons/headphone.svg'
import bank_card from '../../../assets/icons/bank_card.svg'

interface IItemService {
    icon: string,
    title: string,
    subTitle: string
}
const Services = () => (
    <div className={'grid grid-cols-2 mx-8 gap-4 lg:flex lg:flex-row justify-between lg:mx-28 my-8'}>
        <ItemService icon={car as string} title={'Free Shopping'} subTitle={'Free delivery for all orders'}/>
        <ItemService icon={money as string} title={'Money Guarantee'} subTitle={'30 days money back'}/>
        <ItemService icon={headphone as string} title={'24/7 Support'} subTitle={'Friendly 24/7 support'}/>
        <ItemService icon={bank_card as string} title={'Secure Payment'} subTitle={'All cards accepted'}/>
    </div>
);


const ItemService = (props: IItemService) => (
    <div className={'flex flex-row justify-center items-center lg:gap-3 lg:justify-between'}>
        <Image className={'mr-3 lg:m-0'} src={props.icon} alt={'icons service'} width={24} height={24}/>
        <div className={'flex flex-col'}>
            <label className={'text-sm font-medium'}>{props.title}</label>
            <label className={'text-xs text-gray-400'}>{props.subTitle}</label>
        </div>
    </div>
);

export default Services;