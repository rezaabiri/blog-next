import React from 'react';
import Image from "next/image";;
import phone from './../../../assets/icons/phone_c.svg';
import camera from './../../../assets/icons/Camera.svg';
import computer from './../../../assets/icons/Computer.svg';
import dress from './../../../assets/icons/dress.svg';
import games from './../../../assets/icons/Games.svg';
import ball from './../../../assets/icons/Ball.svg';
interface ICategory {
    slug: string;
    name: string;
    url: string;
}

interface ICategoryProps {
    categories: ICategory[];
}

const iconsJson = [
    {
        'icon': phone,
    },
    {
        'icon': camera
    },
    {
        'icon': computer
    },
    {
        'icon': dress
    },
    {
        'icon': games
    },
    {
        'icon': ball
    },
]
const Category = (props: ICategoryProps) => (
    <div className={'flex flex-col mx-28 my-6'}>
        <div className={'flex flex-row justify-between'}>
            <label className={'text-2xl font-extrabold text-black'}>Category</label>
            <button className={'rounded-sm px-6 py-1.5 border border-1 border-[#43467F] text-sm text-[#43467F]'}>
                View All
            </button>

        </div>
        <div className={'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 place-items-center my-12'}>
            {
                props.categories.slice(0,6).map((item, index) => {
                    return(
                        ItemCategory(iconsJson[index].icon as string, item.name, item.slug)
                    )
                })
            }
        </div>

    </div>

);

const ItemCategory = (icon: string, name: string, slug: string) => (
    <div className={'flex flex-col gap-1 items-center'}>
        <Image src={icon} alt={'icons service'} width={42} height={42}/>
        <label className={'text-sm font-medium mt-3'}>{name}</label>
        <label className={'text-xs text-gray-400'}>{slug}</label>
    </div>
);

export default Category;