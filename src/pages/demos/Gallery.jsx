import React from 'react'
import "../../styles/gallery.css"

import {
    bug,
    corn,
    mushroom,
    tree,
    beach,
    beach2,
    flower1,
    flower2,
    lake,
    paw,
    sunset,
    volcano
} from "../../assets/photos";

const Gallery = () => {
    return (
        <>
            <div className="gallery">
                <div id="1" className=""><img src={bug} alt="" /></div>
                <div id="2" className="v-stretch"><img src={beach} alt="" /></div>
                <div id="3" className="h-stretch"><img src={mushroom} alt="" /></div>
                <div id="4" className=""><img src={bug} alt="" /></div>
                <div id="5" className=""><img src={beach2} alt="" /></div>
                <div id="6" className="v-stretch"><img src={corn} alt="" /></div>
                <div id="7" className="big-stretch"><img src={tree} alt="" /></div>
                <div id="8" className=""><img src={flower1} alt="" /></div>
                <div id="9" className="h-stretch"><img src={flower2} alt="" /></div>
                <div id="10" className=""><img src={bug} alt="" /></div>
                <div id="11" className=""><img src={lake} alt="" /></div>
                <div id="12" className=""><img src={paw} alt="" /></div>
                <div id="13" className="v-stretch"><img src={corn} alt="" /></div>
                <div id="14" className="h-stretch"><img src={sunset} alt="" /></div>
                <div id="15" className=""><img src={tree} alt="" /></div>
                <div id="16" className=""><img src={volcano} alt="" /></div>
                <div id="17" className="big-stretch"><img src={mushroom} alt="" /></div>
                <div id="18" className=""><img src={bug} alt="" /></div>
                <div id="19" className="big-stretch"><img src={sunset} alt="" /></div>
                <div id="20" className="h-stretch"><img src={bug} alt="" /></div>
                <div id="21" className=""><img src={bug} alt="" /></div>
                <div id="8" className=""><img src={flower1} alt="" /></div>
                <div id="9" className="h-stretch"><img src={flower2} alt="" /></div>
                <div id="10" className=""><img src={bug} alt="" /></div>
                <div id="11" className="h-stretch"><img src={lake} alt="" /></div>
                <div id="12" className=""><img src={paw} alt="" /></div>
                <div id="13" className="v-stretch"><img src={corn} alt="" /></div>
                <div id="14" className="v-stretch"><img src={sunset} alt="" /></div>
                <div id="15" className="big-stretch"><img src={tree} alt="" /></div>
                <div id="16" className=""><img src={volcano} alt="" /></div>
            </div>
        </>
    )
}

export default Gallery