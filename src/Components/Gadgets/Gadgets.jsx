import { useEffect, useState } from "react";
import Category from "./Category";


const Gadgets = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    
    return (
        <div>

            <div className="flex gap-5 w-10/12 mx-auto">

                <div className="shadow-lg w-3/12 ">
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
                <div className="border-2 h-5 w-9/12"></div>

            </div>

        </div>
    );
};

export default Gadgets;