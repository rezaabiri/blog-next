import React from 'react';
import Image from "next/image";
import Rating from '../components/Rating'

interface IProductCartItem {
    image: string,
    brand: string,
    title: string,
    price: string,
    rating: number
}

const ProductCart = (props: IProductCartItem) => (
    <div className={'flex flex-col rounded-lg mb-12 h-[280px] w-48 p-2'}>
        <Image style={{width: '170px', height: '170px'}}
            src={props.image as string}
            alt={'image product'}
            className={'rounded-lg'}
               width={170}
               height={170}
        />
        <label className={'text-gray-400 text-xs'}>{props.brand}</label>
        <label className={'text-black text-sm font-semibold mt-2'}>{props.title}</label>
        <div className={'flex flex-row justify-between mt-2'}>
            <label className={'text-blue-700 text-xs '}>{`$ ${props.price}`}</label>
            <Rating rating={props.rating}/>
        </div>
    </div>

);

export default ProductCart;