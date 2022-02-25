import React from "react";
import Image from "next/image";
import icondocu from "./../public/static/images/docum_assets/icon-docu.svg"

const Documents  = () => {
    return(
        <div>
            <ul className="general-container-documents">
            <div className="container-title">
                <h6 className="documents-title">Documentos cargados</h6>
            </div>
                    <li className="container-item">
                    <div> <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">RUT PrevalentWare</a></div>
                        <div><Image className="icon-docu" width = {30} height = {40} src={icondocu}/></div>
                    </li>
                    <li className="container-item">
                    <div> <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">RUT PrevalentWare</a></div>
                        <div><Image className="icon-docu" width = {30} height = {40} src={icondocu}/></div>
                    </li>
                    <li className="container-item">
                        <div> <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">RUT PrevalentWare</a></div>
                        <div><Image className="icon-docu" width = {30} height = {40} src={icondocu}/></div>
                    </li>
                    <li className="container-item">
                    <div> <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">RUT PrevalentWare</a></div>
                        <div><Image className="icon-docu" width = {30} height = {40} src={icondocu}/></div>
                    </li>

            </ul>
        </div> 
    
    );
}

export default Documents;

