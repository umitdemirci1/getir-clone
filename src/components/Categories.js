import { useEffect, useState } from "react";
import categoryData from '../api/categories.json';
import Category from "./Category";

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        //mock api request
        setCategories(categoryData)

    })
    return (
        <>
            <div className="container mx-auto px-[144px] text-gray-700">
                <p className=" text-[14px] mt-6 mb-3 font-semibold">Kategoriler</p>
                <div className="grid grid-cols-10 gap-[16px]">
                    {categories && categories.map((category, index) => (<Category key={index} category={category} />))}
                </div>
            </div>
        </>
    );
}

export default Categories;