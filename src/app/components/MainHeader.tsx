import React from 'react';
import cart from '../../../assets/icons/cart_fill.svg';
import user from '../../../assets/icons/user_fill.svg';
import logo from '../../../assets/icons/logo.svg';
import fav from '../../../assets/icons/fav_fill.svg';
import search from '../../../assets/icons/search.svg';
import Image from "next/image";

interface IHeaderItem {
    icon: string
    title: string
}

interface IIcon {
    icon: string
}
const MainHeader = () => (
    <header className={'w-full pt-7 pb-4 px-5'}>
        <div className={'flex flex-row justify-between items-center'}>
            <HeaderItem icon={logo as string} title={'Elma'}/>
            <div className={'flex flex-row bg-gray-100 rounded-md w-1/2 justify-between items-center'}>
                <input
                    className={'bg-gray-100 w-[30%] p-2 border-none text-gray-900 text-sm rounded-lg focus:border-none block outline-none placeholder:text-gray-400'}
                    placeholder={'Search anything'}/>
                <div className={'flex flex-row items-center'}>
                    <label className={'text-sm text-gray-400 mr-3'}>All Categories</label>
                    <div className={'rounded-md bg-black p-2'}>
                        <Image src={search as string} alt={'search'}/>
                    </div>
                </div>
            </div>
            <div className={'flex flex-row'}>
                <CircleItem icon={cart as string}/>
                <CircleItem icon={fav as string}/>
                <CircleItem icon={user as string}/>

            </div>
        </div>

    </header>
);

const HeaderItem = (itemHeader: IHeaderItem) => (
    <div className={'flex flex-row justify-center items-center cursor-pointer'}>
        <Image src={itemHeader.icon as string} alt={'cart'} className={'mr-2'} width={24} height={24}/>
        <label className={'pt-1 pr-2 cursor-pointer text-black text-xl font-semibold'}>{itemHeader.title}</label>
    </div>
);

const CircleItem = (icon: IIcon) => (
    <div className={'justify-center items-center cursor-pointer rounded-full p-2 border border-1 border-gray-300 mx-2'}>
        <Image src={icon.icon} alt={'cart'} width={22} height={22}/>
    </div>
);
export default MainHeader;