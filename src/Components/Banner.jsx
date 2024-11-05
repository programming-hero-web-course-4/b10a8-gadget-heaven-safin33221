
import banner from '../assets/banner.jpg';
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className=' h-full'>
            <div className=" bg-[#9538E2] pb-32 rounded-lg relative bottom-3 w-11/12 mx-auto py-4 items-stretch">
                <div className=" text-center">
                    <div className=" text-white flex flex-col w-full">

                        <div className="w-8/12 mx-auto">
                            <h1 className="text-2xl  md:text-4xl font-bold">Upgrade your tech accessorize with Gadget Heaven Accessorize</h1>
                            <p className="py-2">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <Link to='/dashboard'><button className="btn bg-white rounded-3xl text-[#9538E2] font-bold mb-10">Shop now</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-4/5 lg:max-w-[800px] h-[350px]  bg-cover flex mx-auto border-2 border-white p-4 rounded-lg relative bottom-40">
                <img className="w-full rounded-lg bg-cover" src={banner} alt="" />
            </div>

        </div>
    );
};

export default Banner;