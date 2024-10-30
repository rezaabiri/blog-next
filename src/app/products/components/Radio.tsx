'use client';

import React, { useState } from 'react';

interface IRadioProps {
    colors: string[];
    price: string
}

const Radio = ({ colors, price }: IRadioProps) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [priceColor, setPriceColor] = useState<string | null>(price as string)
    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
        switch (color){
            case "#ff0000":
                setPriceColor('2,000,000')
                break;
            case "#00ff00":
                setPriceColor('5,250,000')
                break;
            case "#0000ff":
                setPriceColor('4,100,000')
                break;
            case "#ff00ff":
                setPriceColor('6,260,000')
                break;
            case "#ffff00":
                setPriceColor('3,860,000')
                break;
        }
    };

    return (
        <div className={'flex flex-col'}>
            <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">Choose Color</h3>
            <ul className="grid grid-cols-12 gap-16 lg:gap-0 w-auto">
                {
                    colors.map((color, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                id={`color-${index}`}
                                name="color"
                                value={color}
                                className="hidden peer"
                                checked={selectedColor === color}
                                onChange={() => handleColorSelect(color)}
                                required
                            />
                            <div
                                className={`w-12 h-12 border border-1 rounded-full flex items-center justify-center peer-checked:border-2 peer-checked:border-black`}>
                                <label
                                    htmlFor={`color-${index}`}
                                    className={`inline-flex items-center justify-between w-4 h-4 p-4 rounded-full cursor-pointer`}
                                    style={{backgroundColor: color}}
                                />
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className={'flex pb-4 lg:pb-0 flex-col lg:flex-row lg:items-center justify-between mt-6'}>
                <label className={'mr-5 pb-4 lg:pb-0 text-2xl font-semibold'}>
                    {`$ ${priceColor}`}
                </label>
                <div className={'flex flex-row'}>
                    <button
                        className={'rounded-lg mr-5 w-48 lg:px-6 py-3 border border-1 border-[#43467F] text-sm text-[#43467F]'}>Buy
                        Now
                    </button>
                    <button className={'rounded-lg w-48 lg:px-6 py-3 bg-[#43467F] text-sm text-white'}>Add
                        to
                        cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Radio;
