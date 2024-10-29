'use client'
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import {Autoplay} from "swiper/modules";
import Image from "next/image";

interface ISwiper{
    reverse: boolean,
    imagesList: string[]
}
const SwiperCardMarquee = (props: ISwiper) => (
    <div className={'relative'}>

        <Swiper
            className={'swiper-marquee'}
            slidesPerView={10}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: props.reverse
            }}
            speed={6000}
            freeMode={true}
            modules={[Autoplay]}
            allowTouchMove={false}
        >
            {props.imagesList?.map((steward, index) => {
                return (
                    <SwiperSlide
                        key={index}
                    >
                        {/*<SlideBox id={index}/>*/}
                        <Image
                            className={'rounded-lg bg-gray-300 p-2'}
                            src={props.imagesList[index]}
                            alt={'image'} width={100} height={60}
                        />
                    </SwiperSlide>
                );
            })}

        </Swiper>
        <div className={'z-20 absolute top-0 left-0 right-0 bottom-0 linear-gradient'}></div>

    </div>


);

const SlideBox = (props: { id: number }) => (
    <div className={'flex flex-col items-center justify-center w-auto h-12 rounded-lg bg-gray-300'}>
        <h1>Hello swiper id : {props.id}</h1>
    </div>
);
export default SwiperCardMarquee;