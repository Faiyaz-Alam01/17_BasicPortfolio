import React from "react";

export default function About(){
    return(
        <div>
            <div className="py-16 w-full">
                <div className="flex flex-col items-center justify-evenly space-y-8 pt-10 sm:flex-row">
                    {/* image */}
                    <div className="pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRFwQMPvkgLqDPX0gtyyVT6iQSFJ7rOfu5A&s" 
                    alt="" />
                    </div>
                    
                    {/* details */}
                    <div className="text-xl max-w-sm tracking-wider ">
                        <p>Hi, I'm <span className="text-black font-medium">Faiyaz Alam</span>, a passionate Frontend Developer. i build a lot of website  responsive and intractive website
                            I've skills <span className="text-black font-medium">HTML, CSS, Tailwind CSS, JavaScript, React.Js , GIT AND GITHUB.</span>
                        </p>
                        {/* <div className="flex flex-col mt-4 space-y-2">
                            
                                <label htmlFor="HTML">HTML</label>
                                <input type="range" value={80} id="HTML" className="accent-blue-950"/>
                          

                           
                                <label htmlFor="CSS">CSS</label>
                                <input type="range" value={60} id="CSS" className="accent-blue-950"/>
                           
                           
                                <label htmlFor="Js">JavaScript</label>
                                <input type="range" value={80} id="Js" className="accent-blue-950" />
                            

                           
                                <label htmlFor="tcss">Tailwind CSS</label>
                                <input type="range" value={85} id="tcss" className="accent-blue-950"/>
                           

                            
                                <label htmlFor="HTML">React.js</label>
                                <input type="range" value={75} id="HTML" className="accent-blue-950"/>
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
