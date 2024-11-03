import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Components/Banner";
import Gadgets from "./Components/Gadgets/Gadgets";
import Category from "./Components/Gadgets/Category";


const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div>
            <Banner></Banner>

            <div className="flex gap-5 w-10/12 mx-auto">

                <div className="shadow-lg w-3/12 h-fit rounded-lg ">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
                <div className="border-2  w-9/12 ">
                    <Outlet></Outlet>
                </div>

            </div>
            

        </div>
    );
};

export default Home;