import React from "react";
import { Link } from "react-router-dom";
import "./SnackLayout.css"
import butterfinger from "./assets/images/butterfinger.png"
import funyuns from "./assets/images/funyuns.png"
import gatorade from "./assets/images/gatorade.png"
import monster from "./assets/images/monster-energy-drink-34.png"
import water from "./assets/images/water.png"
import swissroll from "./assets/images/swissroll.png"

const SnackLayout = () => {
    const snackImages = [
        {src: butterfinger, alt: 'Butterfinger', title: 'Butterfinger'},
        {src: funyuns, alt: 'Funyuns', title: 'Funyuns'},
        {src: gatorade, alt: 'Gatorade', title: 'Gatorade'},
        {src: monster, alt: 'Monster', title: 'Monster'},
        {src: water, alt: 'Water', title: 'Water'},
        {src: swissroll, alt: 'Swiss Roll', title: 'SwissRoll'}
    ]

    return(
        <><h1>BIG BOY DELUXE VENDING</h1>
            <h2> Pick an item, any item!</h2>
            <hr></hr>
        <div className="snackLayoutDiv">
            {snackImages.map((image, index) => (
                <div key={index}>
                    <Link to={`/snacks/${image.title.toLowerCase()}`}>
                    <img src={image.src} alt={image.alt} className="snackImage"/>
                    <h2>{image.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
        </>
    )
}

export default SnackLayout