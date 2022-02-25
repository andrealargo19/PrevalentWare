import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoimg from "./../public/static/images/form_assets/Logo_Negro_1.svg";
import iconadjunt from "./../public/static/images/form_assets/icon-adjunt.svg";
import Modal from "./modalDoc";

const Form = (props) => {
    const commercial_name = props.company.commercial_name.toUpperCase();
    const company_name = props.company.company_name.toUpperCase();
    const id_type = props.company.id_type.toUpperCase();
    const [showModal, setShowModal] = useState(false);

    return(
        <div className="relative">
            {/* <div className="hidden md:block lg:block xl:block 2xl:block absolute right-10">
                <Buttons/>
            </div> */}
            <div className="container-form-details">
                <div className="container-logo-img">
                    <Image className="logo-img" width = {174} height = {151} src={logoimg}/>
                </div>
                <div className="container-details-flex">
                    <div>
                        <h5 className="container-form-title">Nombre de la empresa</h5>
                        <p className="container-form-parrafo">{commercial_name}</p>
                    </div>
                    <div>
                        <h5 className="container-form-title">Razón Social</h5>
                        <p className="container-form-parrafo">{company_name}</p>
                    </div>
                    <div>
                        <h5 className="container-form-title">Tipo de identificación</h5>
                        <p className="container-form-parrafo">{id_type}</p>
                    </div>
                    <div>
                        <h5 className="container-form-title">Identificación</h5>
                        <p className="container-form-parrafo">{props.company.id_number}-4</p>
                    </div>
                    <div>
                        <h5 className="container-form-title"># de empleados</h5>
                        <p className="container-form-parrafo">{props.company.number_employees}</p>
                    </div>
                    <div>
                        <button onClick={() => setShowModal(true)}>
                            <div className=" button-adjunto-container hidden md:block lg:block xl:block 2xl:block">
                                <p>Ver archivos adjuntos</p>
                                    <div>
                                    <Image className="icon-adjunt" width = {28} height = {28} src={iconadjunt}/>
                                    </div>
                            </div>
                        </button>
                        <Modal onClose={() => setShowModal(false)} show={showModal}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Form;