import React, { useState } from 'react'

function Card({title,description,icon}) {
    const [isHovered, setisHovered] = useState(false);
    return (

        <div className="container mx-auto py-12">   
                    <div             
                        className={`p-6 rounded-lg cursor-pointer ${isHovered ? "bg-pink-500 text-white" : "bg-gray-800 text-gray-300"
                            } transition-colors duration-700 ease-in-out`}
                        onMouseEnter={() => setisHovered(true)}
                        onMouseLeave={() => setisHovered(false)}
                    >
                        <div className="text-4xl mb-4">{icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{title}</h3>
                        <p>{description}</p>
                        <a href="#" className="mt-4 inline-block text-white hover:underline">
                            Learn more
                        </a>
                    </div>
            
            </div>
      

    )
}

export default Card
