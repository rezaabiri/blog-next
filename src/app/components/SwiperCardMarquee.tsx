'use client'
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import {Autoplay} from "swiper/modules";
import Image from "next/image";
import {SwiperOptions} from "swiper/types";

interface ISwiper{
    reverse: boolean,
    imagesList: string[]
}
const swiperMobile: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 6
};
const swiperTablet: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 8
};
const swiperDesktop: SwiperOptions = {
    slidesPerView: 8,
    spaceBetween: 10
};
const SwiperCardMarquee = (props: ISwiper) => (
    <div className={'relative'}>

        <Swiper
            className={'swiper-marquee'}
            loop={true}
            breakpoints={{
                300: swiperMobile,
                740: swiperTablet,
                1024: swiperDesktop
            }}
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
                        <Image
                            key={index}
                            className={'rounded-lg bg-gray-300 p-1 lg:p-2'}
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
export default SwiperCardMarquee;