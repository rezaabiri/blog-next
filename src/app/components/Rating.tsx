import {JSX} from "types-react";

interface RatingProps {
    rating: number;
}

const Rating: (props: RatingProps) => JSX.Element = (props:RatingProps) => {
    const totalStars = 5;
    const fakeList = Array.from({length: totalStars}, (_, index) => index + 1);

    return (
        <div className="flex">
            {fakeList.map((item, index) => {
                if (item <= Math.floor(props.rating)) {
                    return (
                        <svg
                            key={index}
                            className="w-3 h-3 ms-1 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    );
                } else if (item === Math.ceil(props.rating) && props.rating % 1 !== 0) {
                    return (
                        <svg
                            key={item}
                            className="w-3 h-3 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 20"
                        >
                            <defs>
                                <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="50%" stopColor="gold"/>
                                    <stop offset="50%" stopColor="lightgray"/>
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#half-fill)"
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                            />
                        </svg>
                    );
                } else {
                    return (
                        <svg
                            key={item}
                            className="w-3 h-3 ms-1 text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    );
                }
            })}
        </div>
    );
};

export default Rating;
