import React from 'react';
import Image from "next/image";
import iconback from "./../public/static/images/controls_assets/back.svg";
import iconnext from "./../public/static/images/controls_assets/next.svg";



const Controls = (props) => {
   const MoveCompany = (e) => {
       const target = e.target || e.srcElement || e;
       props.nextCompany(target);
   };
   return (
        <div>
            <div className="container-icons">
                <div className="container-icon-back" onClick={MoveCompany}>
                    <Image className="icon-back" width = {38} height = {38} src={iconback} id="back"/>
                </div>
                <h3 className="container-icons-title">Empresa 1 de 2 pendiente por aprobación</h3>
                <div className="container-icon-next" onClick={MoveCompany}>
                    <Image className="icon-next" width = {38} height = {38} src={iconnext} id="next"/>
                </div>
            </div>
        </div>
    );
}

export default Controls;