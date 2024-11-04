import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Components/Banner";
import Gadgets from "./Components/Gadgets/Gadgets";
import Category from "./Components/Gadgets/Category";


const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div className="rounded-3xl">
            <Banner></Banner>

            <div className="flex justify-center text-center">
                <h1 className="text-3xl font-bold my-6">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:w-10/12 mx-auto">


                <div className="shadow-lg md:w-3/12  h-fit rounded-lg  ">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
                <div className=" w-9/12 mx-auto">
                    <Outlet></Outlet>
                </div>

            </div>


        </div>
    );
};

export default Home;