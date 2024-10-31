import React from 'react';

interface InputType {
    label: string,
    placeHolder: string,
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password' | 'number';
}
const Input = (props: InputType) => (
    <div className={'flex flex-col w-full'}>
        <label className={'text-sm mb-2'}>{props.label}</label>
        <input
            className={'bg-gray-100 w-full p-3 border border-1 border-gray-400 text-gray-900 text-sm rounded-md focus:border-gray-500 block outline-none placeholder:text-gray-400'}
            placeholder={props.placeHolder}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            type={props.type ?? 'text'}

        />
    </div>
);

export default Input;