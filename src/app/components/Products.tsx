import React from 'react';
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';

const Products = async () => {
    const products = await client.fetch(groq`*[_type=="product"]`);
    console.log('Fetched products%%%%%%%:', products[1]);

    return (
        <div className='bg-[#f8f8f8] w-full py-12 mt-[125px]'>
            <div className='container'>
                <div className='py-4'>
                    <h1 className='text-3xl font-bold'>Best Selling Products</h1>
                    <h1>Enjoy Up To 50%</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 mt-6'>
                    {products.map((product: any, index: number) => {
                        console.log(`*****Product ${index} Images:`, product.Images);

                        const imageUrl = product.Images && product.Images[0] && urlForImage(product.Images[0]);
                        console.log(`Product ${index} image URL:`, imageUrl);

                        return (
                            <div key={index} className='bg-white pt-10 drep-shadow-md rounded-lg overflow-h'>
                                {imageUrl ? (
                                    <Image
                                        src={imageUrl}
                                        alt={product.slug.current}
                                        width={220}
                                        height={100}
                                        className='object-cover h32 mx-auto'
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                                <div className='text-center py-5'> 
                                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                                    <p className='text-xl text-gray-500 font-bold'>${product.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Products;
