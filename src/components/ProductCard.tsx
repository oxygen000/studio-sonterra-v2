"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ShoppingBag } from "lucide-react";
import { RootState } from "@/store/store";
import Link from "next/link";
import Image from "next/image";


const translations = {
  en: { addToCart: "Add to Cart" },
  ar: { addToCart: "أضف إلى السلة" },
};

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.current);
  const t = translations[language as keyof typeof translations];

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // منع التنقل عند النقر على الزر داخل <Link>
    dispatch(addToCart({ id, name, price, image }));
  };

  return (
    <Link href={`/product/${id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        
        <div className="relative w-full aspect-[4/5]"> 
          <Image src={image} alt={name}  className="object-cover"  />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
          <p className="text-yellow-500 font-bold mt-2">${price}</p>
          
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-300"
          >
            <ShoppingBag size={20} />
            {t.addToCart}
          </button>
        </div>
      </div>
    </Link>
  );
};
