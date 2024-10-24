import React from 'react';
import Image from "next/image";

interface ICategory {
    slug: string;
    name: string;
    url: string;
}

interface ICategoryProps {
    categories: ICategory[];
}

const icons: string[] = [
    './../../../assets/icons/phone_c.svg',
     './../../../assets/icons/Camera.svg',
     './../../../assets/icons/Computer.svg',
    './../../../assets/icons/dress.svg',
    './../../../assets/icons/Games.svg',
    './../../../assets/icons/Ball.svg'
]
const Category = (props: ICategoryProps) => (
    <div className={'flex flex-col mx-28 my-12'}>
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
                        ItemCategory(icons[index], item.name, item.slug)
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