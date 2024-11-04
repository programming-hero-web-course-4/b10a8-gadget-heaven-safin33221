import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import { useEffect, useState } from "react";


const GadgetsCategory = () => {
    const { category } = useParams()

    const data = useLoaderData()

    const [gadget, setGadget] = useState([])
    useEffect(() => {
        if (category) {
            const categoryGadgets = [...data].filter(gadget => gadget.category === category)
            console.log(categoryGadgets);
            if (category === 'AllProducts') {
                setGadget(data)
            } else {
                setGadget(categoryGadgets)
            }
        } else {
            setGadget(data)
        }

    }, [category, Gadget])




    return (
        <>
            
            <div className="grid grid-cols-3 gap-3">
                {
                    gadget.map(gadget => <Gadget key={gadget.id} gadget={gadget}></Gadget>)
                }
            </div>
        </>
    );
};

export default GadgetsCategory;