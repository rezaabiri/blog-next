
import Link from 'next/link';
import MainHeader from "@/app/components/MainHeader";
import ProductCart from "@/app/components/ProductCart";
import SliderCard from "@/app/components/SliderCard";
import Services from "@/app/components/Services";
import Banner from "@/app/components/Banner";


import Category from "@/app/components/Category";
import SwiperCardMarquee from "@/app/components/SwiperCardMarquee";
import SwiperCardSlider from "@/app/components/SwiperCardSlider";
import {Counter} from "@/app/components/Counter";

interface IProducts {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
interface Product {
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

interface ICategories {
    slug: string;
    name: string;
    url: string;
}
async function fetchProducts(): Promise<IProducts> {
    const res: Response = await fetch('https://offerja.ir/shop_api/main.json', {
        next: { revalidate: 60 },
    });
    return res.json();
}
async function fetchCategories(): Promise<ICategories[]> {
    const res: Response = await fetch('https://offerja.ir/shop_api/category.json', {
        next: { revalidate: 60 },
    });
    return res.json();
}

const Posts = async () => {
    const products: IProducts = await fetchProducts();
    const categories: ICategories[] = await fetchCategories();

  return (
      <div>
          <MainHeader/>
          <SliderCard
              title={products.products[0].title}
              headLine={products.products[0].title}
              description={products.products[0].description}
              buyButtonLink={"google.com"}
              learnMoreButtonLink={"google.com"}
              image={products.products[0].images[0]}
          />
          <Services/>
          <div className={'flex flex-col w-full text-center mt-20'}>
              <h2 className={'font-extrabold text-xl'}>Best Seller Products</h2>
              <label className={'text-md text-gray-400'}>Check our best seller products on Elma website right
                  now</label>

          </div>
          <div className={'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center my-4 lg:mx-8'}>
              {products.products.map((product) => (
                  <Link
                      className={'flex flex-col justify-center items-center'}
                      key={product.id} href={`/products/${product.id}`}>
                      <ProductCart
                          image={product.images[0] as string}
                          brand={product.brand}
                          title={product.title}
                          price={String(product.price)}
                          rating={product.rating}
                      />
                  </Link>
              ))}
          </div>
          <Banner
              title={products.products[1].title}
              headLine={products.products[1].title}
              description={products.products[1].description}
              buyButtonLink={"google.com"}
              discountPercentage={String(products.products[1].discountPercentage)}
              image={products.products[1].thumbnail}
          />
          <br/>
          <br/>
          <br/>
          <SwiperCardMarquee reverse={false} imagesList={products.products[6].images}/>
          <br/>
          <br/>
          <Category categories={categories}/>
          <br/>
          <SwiperCardSlider reverse={false} imageList={products.products[6].images}/>
          <br/>
          <Counter/>
      </div>
  );
};

export default Posts;
