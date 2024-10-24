import { notFound } from 'next/navigation';
import Image from "next/image";
import MainHeader from "@/app/components/MainHeader";

interface IProducts {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}
interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
}
interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}
interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
interface Dimensions {
    width: number;
    height: number;
    depth: number;
}
async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        notFound();
    }


    return res.json();
}
export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/products/');

    const products: IProducts = await res.json();

    return products.products.map((product) => ({
        id: product.id.toString(),
    }));
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
    const product: IProduct = await getProduct(params.id);

    return (
        <div className={'w-full flex flex-col items-center justify-center'}>
            <MainHeader/>
            <div className={'w-full flex flex-row mt-8'}>
                <Image src={product.images[0]} alt={'product'} width={400} height={400}/>
                <div className={'flex flex-col mt-5'}>
                    <label className={'text-black text-3xl font-semibold'}>{product.title}</label>
                    <div className={'flex flex-row items-center'}>
                        <div className={'flex flex-row rounded-md bg-orange-500 py-0.5 items-center'}>
                            <Star/>
                            <label className={'text-white text-sm px-2'}>4.6</label>
                        </div>
                        <label className={'text-sm text-gray-400 ml-4'}>{product.category}</label>
                        <label className={'text-sm text-gray-400'}>{product.tags.toString()}</label>
                    </div>
                    <desc className={'text-sm text-gray-400 mt-3 w-1/2'}>{product.description}</desc>

                </div>
            </div>
        </div>

    );
};

const Star = () => (
    <svg
        className="w-3 h-3 ms-1 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        viewBox="0 0 22 20"
    >
        <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
);

export default ProductDetail;
