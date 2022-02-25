import React from "react";
import Image from "next/image";
import icontime from "./../public/static/images/cards_assets/icon-time.svg"

import image_1 from "./../public/static/images/cards_assets/icon-minicard.svg"
import image_2 from "./../public/static/images/cards_assets/icon-indicators.svg"
import image_3 from "./../public/static/images/cards_assets/icon-inscription.svg"
import image_4 from "./../public/static/images/cards_assets/icon-custom.svg"

const Cards = (props) => {
    let image_element;
    if (props.card_info.logo_path == "image_1") {
        image_element = image_1;
    } else if (props.card_info.logo_path == "image_2") {
        image_element = image_2;
    } else if (props.card_info.logo_path == "image_3") {
        image_element = image_3;
    } else if (props.card_info.logo_path == "image_4") {
        image_element = image_4;
    }

    return(
            <div className="container-card">
                <div>
                    <h2>{props.card_info.title}</h2>
                </div>
                <div className="mini-card">
                    <div className="container-icon-minicard">
                        <Image className="iconminicard-" width = {40} height = {35} src={image_element}/>
                    </div>
                </div>
                <div className="container-contenido">
                    <Image className="icon-time" width = {19} height = {19} src={icontime}/>
                    <p className="mini-texto-card">{props.card_info.message}</p>
                </div>
            </div>
    );
}

export default Cards;