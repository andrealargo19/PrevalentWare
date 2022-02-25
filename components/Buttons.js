import React from "react";
import Image from "next/image";
import iconapprove from "./../public/static/images/buttons_assets/approve.svg";
import iconreject from "./../public/static/images/buttons_assets/reject.svg";


const Buttons = (props) => {
    const changeCompanyStatus = (e) => {
        const target = e.target || e.srcElement || e;
        props.clickUpdate(target);
    };
    return(
        <div className="container-buttons">
            <div className="container-buttons-icon-approve">
            <Image className="icon-approve" width = {29} height = {29} src={iconapprove}/>
            <button id="accept" className="button-approve" onClick={changeCompanyStatus}>Aprobar Empresa</button>
            </div>
            <div className="container-buttons-icon-reject">
            <Image className="icon-reject" width = {29} height = {29} src={iconreject}/>
            <button id="reject" className="button-reject" onClick={changeCompanyStatus}>Rechazar Empresa</button>
            </div> 
        </div>
    );
}

export default Buttons;

