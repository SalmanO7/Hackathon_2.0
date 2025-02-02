import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  dicountPercentage: number;
  imageUrl: string;
}

const getData = async () => {
  const data = await client.fetch(` *[_type == "product"]{
  _id,
  title,
  price,
  dicountPercentage,
  description,
  "imageUrl": productImage.asset->url
}
`)

  return data
}

const HeroSectionThird = async () => { 

  const products = await getData()
  return (
    <div className="w-full px-10 sm:px-24  md:px-36">
      <div className="flex justify-center items-center flex-col py-20">
        <p className="text-gray-400">Featured Products</p>
        <h3 className="font-semibold">BESTSELLER PRODUCTS</h3>
        <p className="text-[11px] md:text-sm text-center">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20 sm:gap-x-10 md:gap-x-5 lg:gap-x-10 gap-8">
        {products.map((data: IProduct) => {
          return <div key={data._id} className="flex flex-col justify-center gap-2 items-center">
            <div className="w-[230px]">
              <Link href={`/${data._id}`} >
                <Image src={data.imageUrl} alt={data.title} width={225} height={100}  />
              </Link>
            </div>
            <h2 className="font-semibold">{data.title}</h2>
            <h4 className="text-gray-500">{data.description.split(" ").slice(0, 3).join(" ")}</h4>

            {
              data.dicountPercentage > 0 ?
                <p className=" text-green-800 font-semibold">
                  ${data.price} <span className="text-gray-300">{data.dicountPercentage}%</span>
                </p>
                :
                <p className=" text-green-800 font-semibold">
                  ${data.price}
                </p>
            }
            <div className="flex justify-center items-start gap-1">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        })}
      </div>
    </div >
  );
};

export default HeroSectionThird;
