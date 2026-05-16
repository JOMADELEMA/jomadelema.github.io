import React from 'react'
import {
    bug,
    corn,
    mushroom,
    tree,
} from "../../assets/photos";

import "../../styles/carousel.css"

const DemoCarousel = () => {

    // const properties = [
    //     { id: 1, title: "Casa", image: corn },
    //     { id: 1, title: "Bug", image: bug },
    //     { id: 1, title: "Mushroom", image: mushroom },
    //     { id: 1, title: "tree", image: tree },
    // ]

    // const loopedProperties = [...properties, ...properties, ...properties];

    return (
        // <div className="flex w-full h-full border border-red-500 place-items-center justify-center">
        //     <div id="carousel" className="overflow-hidden w-3/5 h-56 scroll-smooth border border-red-100 flex">
        //         <div id="group" className="flex animate-marquee gap-4 pr-3">
        //             {properties.map((property, i) => (
        //                 <a id="card" href={`/properties/${property.id}`} key={property.id} className="w-56 h-48">
        //                     <div className="border border-blue-400 cursor-pointer">
        //                         <img src={property.image} alt={i} className="rounded-lg shadow-md w-full h-48 object-cover" />
        //                         <h3 className="text-center mt-2 font-semibold text-white">{property.title}</h3>
        //                     </div>
        //                 </a>
        //             ))}
        //         </div>
        //         <div id="group" className="flex animate-marquee gap-4">
        //             {properties.map((property, i) => (
        //                 <a id="card" href={`/properties/${property.id}`} key={property.id} className="w-56 h-48">
        //                     <div className="border border-green-400 cursor-pointer">
        //                         <img src={property.image} alt={i} className="rounded-lg shadow-md w-full h-48 object-cover" />
        //                         <h3 className="text-center mt-2 font-semibold text-white">{property.title}</h3>
        //                     </div>
        //                 </a>
        //             ))}
        //         </div>

        //     </div>
        // </div>
        <>

            {/* div.carousel>div.group>div.card{$}*6 */}
            <div className="carousel">
                <div className="group">
                    <div className="card">1</div>
                    <div className="card">2</div>
                    <div className="card">3</div>
                    <div className="card">4</div>
                    <div className="card">5</div>
                    <div className="card">6</div>
                </div>
                <div aria-hidden className="group">
                    <div className="card">1</div>
                    <div className="card">2</div>
                    <div className="card">3</div>
                    <div className="card">4</div>
                    <div className="card">5</div>
                    <div className="card">6</div>
                </div>
            </div>
        </>
    )
}

export default DemoCarousel