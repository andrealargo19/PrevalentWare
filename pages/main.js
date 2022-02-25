import React from "react";
import Cards from "../components/Cards";

const section_1 = {
        title:"Solicitudes de creación de empresas",
        logo_path: "image_1",
        message: "2 solicitudes sin tratar"
    }
    const section_2 = {
        title:"Indicadores",
        logo_path: "image_2",
        message: "Visitado por última vez: 31/01/2020"
    }
    const section_3 = {
        title:"Inscripción de empleados en empresas",
        logo_path: "image_3",
        message: "3 usuarios sin empresa registrada"
    }
    const section_4 = {
        title:"Gestión de usuarios",
        logo_path: "image_4",
        message: "532 usuarios activos en la plataforma"
    }

    const Main = (props) => {
    const firstCardClick = () => {
        props.cardClick();
    };
    return(
        <div className="container-main-cards">
            <div className="container-individual-cards" onClick={firstCardClick}>
                <Cards card_info={section_1}/>
            </div>
            <div className="container-individual-cards">
                <Cards card_info={section_2}/>
            </div>
            <div className="container-individual-cards">
                <Cards card_info={section_3}/>
            </div>
            <div className="container-individual-cards">
                <Cards card_info={section_4}/>
            </div>
            
            
        </div>
    );
    
};

export default Main;