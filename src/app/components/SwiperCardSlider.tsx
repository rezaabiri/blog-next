'use client'
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {Navigation, Pagination, Scrollbar} from "swiper/modules";
import Image from "next/image";

const arr:string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
    '5',
]
interface ISwiper{
    reverse: boolean,
    imageList: string[]
}
const SwiperCardSlider = (props: ISwiper) => (
    <div style={{direction: 'rtl'}} className={'mx-28'}>
        <Swiper
            slidesPerView={6}
            spaceBetween={25}
            loop={false}
            /*scrollbar={{
                hide: true
            }}*/
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true}}
            style={{ width: "100%", justifyContent: "space-between"}}
        >
            {props.imageList?.map((steward, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        style={{paddingBottom: '45px'}}
                    >
                        {/*<SlideBox id={index}/>*/}
                        <Image
                            className={'rounded-lg bg-gray-300 p-3'}
                            src={props.imageList[index]}
                            alt={'image'} width={200} height={60}
                        />
                    </SwiperSlide>
                );
            })}

        </Swiper>
    </div>


);

const SlideBox = (props: {id: number}) => {
    if(props.id === 0) {
        return (
            <div className={'flex flex-col items-center justify-center w-full h-32 rounded-lg bg-orange-500'}>
                <h1>Most popular products</h1>
                <span className={'font-extrabold rounded-full p-3 bg-white'}>
                    {">"}
                </span>
            </div>
        )
    }
    if(props.id === arr.length -1) {
        return (
            <h1>End of Products</h1>
        )
    }
    return (
        <div className={'flex flex-col items-center justify-center w-auto h-32 rounded-lg bg-gray-300'}>
            <h1>Hello swiper id : {props.id}</h1>
        </div>
    )
}
export default SwiperCardSlider;