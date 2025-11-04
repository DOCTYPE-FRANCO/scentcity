import React, {useEffect, useRef} from "react";
import Herosection from "./Herosection";
import {motion, useAnimation, useInView} from "framer-motion"


import ninePM from "../assets/9PM.jpeg"
import Am from "../assets/Am.jpeg"
import Avanti from "../assets/Avanti.jpeg"
import Cocktail from "../assets/Cocktail.jpeg"
import Genie from "../assets/Genie.jpeg"
import KALY from "../assets/KALY.jpeg"
import Khamrah from "../assets/Khamrah.jpeg"
import Newmusk from "../assets/Newmusk.jpeg"
import Suave from "../assets/Suave.jpeg"
import Supremacy from "../assets/Supremacy.jpeg"

function Homepage(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    const variants = {
        hidden: {opacity: 0, x: 75},
        visible: {opacity: 1, x: 0, transition:{duration: 1.5}}
    }

    useEffect(() =>{
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const products = [
        {
            id: 1,
            name : "9PM",
            image: ninePM,
        },

        {
            id: 2,
            name : "AM Gold",
            image: Am,
        },

        {
            id: 3,
            name : "Avanti",
            image: Avanti,
        },

        {
            id: 4,
            name : "Cocktail",
            image: Cocktail,
        },

        {
            id: 5,
            name : "Genie",
            image: Genie,
        },

        {
            id: 6,
            name : "KALY",
            image: KALY,
        },

        {
            id: 7,
            name : "Khamrah",
            image: Khamrah,
        },

        {
            id: 8,
            name : "New Musk",
            image: Newmusk,
        },

        {
            id: 9,
            name : "Suave",
            image: Suave,
        },

        {
            id: 10,
            name : "Supremacy",
            image: Supremacy,
        },
    ]

    return(
        <div className="z-30">
            <Herosection />

            <p className="mt-20 text-black text-3xl md:text-5xl font-extrabold text-center">CURATED FOR YOU</p>

           <motion.div
                initial="hidden"
                animate={mainControls}
                variants={variants}
                ref={ref}
                className="md:grid  md:grid-cols-4 flex flex-col justify-center items-center gap-3.5 z-20 md:pl-4 mt-10"
            >
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col gap-2 justify-center items-center bg-white w-[250px] h-[300px] shadow-2xl shadow-gray-500 rounded-md">
                        <div className="w-[180px] h-[170px] overflow-hidden rounded-2xl">
                            <img src={product.image} className="w-full object-top hover:scale-110 transition-transform duration-500"/>
                        </div>
                        <div>
                            <p className="font-extrabold">{product.name}</p>
                        </div>

                        <p onClick={() => alert("Not Yet in Store!")} className="bg-black text-white p-1 px-7 mt-5 font-bold rounded-sm hover:cursor-pointer hover:bg-gray-500 transition-all duration-300">GO TO SHOP</p>
                    </div>
                ))}
           </motion.div>
        </div>
    );
}

export default Homepage;