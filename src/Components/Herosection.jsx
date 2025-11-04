import React, {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import heroimg from "../assets/hero.jpg"
function Herosection(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    const variants = {
        hidden:{opacity: 0, x: 75},
        visible:{opacity: 1, x: 0, transition: {duration: 2}}
    }

    useEffect(() =>{
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

    return(
        <div className="flex justify-center md:justify-start  relative w-full h-[500px] pt-32 md:pl-28">
            <img 
                src={heroimg}
                className="absolute inset-0 w-full h-[500px] object-cover"
                loading="eager"
            />

            <div className="absolute inset-0 bg-black/50" />

            <motion.div
                ref={ref}
                className="relative md:items-start items-center z-20 flex flex-col gap-4 "
                variants={variants}
                initial="hidden"
                animate={mainControls}
            >

                <p className="flex md:justify-start md:text-7xl text-5xl text-white font-extrabold">
                    Scent City Fragrance
                </p>

                <p className="flex md:text-3xl md:justify-start text-xl text-white font-bold mb-7 max-w-[300px] md:max-w-[800px]">
                    Luxury Scents, Real-World Prices.
                </p>

                <p
                    onClick={() => alert("No Products Yet!")}
                    className="w-[300px] h-[45px] font-extrabold bg-white hover:scale-110 flex justify-center items-center transition-transform duration-500 rounded-sm"
                >
                    SHOP NOW
                </p>
            </motion.div>
        </div>
    );
}
export default Herosection;