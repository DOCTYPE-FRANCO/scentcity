import React from "react";
import TT from "../assets/ttwhite.png"
import IG from "../assets/igwhite.png"
function Footer(){
    return(
        <div className=" flex flex-col gap-3 bg-black justify-between text-white w-full h-[360px] md:h-[360px] mt-20 bottom-0 right-0 left-0">
            <div className="flex flex-col gap-4 md:flex-row justify-between">
                <div className="flex flex-col  gap-2 ml-10 mt-10">
                    <p className="font-extrabold text-2xl">CONTACT US</p>< br/>
                    <p className="font-bold">Email: scentcity@gmail.com</p>
                    <p className="font-bold">Phone: +1 234 567 890</p>
                    <p className="font-bold">Address: Ago Lagos, Nigeria</p>

                    <div className="flex flex-row gap-3 md:justify-center md:-ml-10 mt-10">      
                        <div>
                            <a href="https://www.linkedin.com/in/uchenna-emeh-9b5833356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={TT} className="w-[30px] hover:scale-125 transition-all duration-500"/></a>
                        </div>
                            
                        <div className="rounded-full w-[30px] overflow-hidden">
                            <a href="https://wa.me/2348120362926?text=Hello%20i%20got%20your%20number%20from%20your%20portfolio"><img src={IG} className="w-[30px] hover:scale-125 transition-all duration-500"/></a>
                        </div>
                            
                        
                
                    </div>
                </div>

                
            </div>
            <div className="flex justify-center items-center mt-10">
                <p className="font-bold">© 2025 Scent City Fragrance. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;