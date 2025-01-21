import Image from "next/image";
import React from "react";
import IconImg1 from "@/public/assets/col-md-2.png";
import IconImg2 from "@/public/assets/fa-brands-2.png";
import IconImg3 from "@/public/assets/fa-brands-3.png";
import IconImg4 from "@/public/assets/fa-brands-4.png";
import IconImg5 from "@/public/assets/fa-brands-5.png";
import IconImg6 from "@/public/assets/fa-brands-6.png";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface IProduct {
  _id: string;
  title: string;
  price: number;
  description:string;
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

const ProductCards = async () => {

  const products = await getData()

  return (
    <div className="bg-gray-50 h-[100%] mt-10 px-10 sm:px-15 md:px-[60px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
      <h2 className="uppercase py-10 text-xl font-semibold">
        BestSeller Products
      </h2>
      <div className="border my-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-5 gap-8">
      {products.map((data: IProduct) => {
          return <div key={data._id} className="flex flex-col justify-center gap-2 items-center">
            <div className="w-[200px]">
              <Link href={`/${data._id}`} >
                <Image src={data.imageUrl} alt={data.title} width={200} height={100} />
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
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-y-48 gap-x-10 py-16 p-20 gap-10 ">
          <Image
            src={IconImg1}
            alt="Img"
            className="w-[2000px] h-[100px]"
          />
          <Image
            src={IconImg2}
            alt="Img"
            className="w-[150px] md:w-[170px] xl:w-[200px]"
          />
          <Image
            src={IconImg3}
            alt="Img"
            className="w-[150px] md:w-[170px] xl:w-[200px]"
          />
          <Image
            src={IconImg4}
            alt="Img"
            className="w-[150px] md:w-[170px] xl:w-[200px]"
          />
          <Image
            src={IconImg5}
            alt="Img"
            className="w-[150px] md:w-[170px] xl:w-[200px]"
          />
          <Image
            src={IconImg6}
            className="w-[150px] md:w-[170px] xl:w-[200px]"
            alt="Img"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
