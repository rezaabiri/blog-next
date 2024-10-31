import React from 'react';
interface ButtonType {
    label: string,
    className?: string
    onClick: () => void
}
const Button = (props: ButtonType) => {
    return (
        <button
            className={`${props.className} w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md`}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    )
};

export default Button;