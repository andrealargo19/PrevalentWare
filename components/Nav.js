import React from "react";
import Image from "next/image";
import logo from "./../public/static/images/nav_assets/Logo_1.svg"
import slogan from "./../public/static/images/nav_assets/Gente_DeMente.svg";
import iconhamburg from "./../public/static/images/nav_assets/Vector.svg";
import iconsearch from "./../public/static/images/nav_assets/icon-search.svg";
import iconadmon from "./../public/static/images/nav_assets/icon-admon.svg";
import iconmini2 from "./../public/static/images/nav_assets/icon-mini2.svg";
import iconempleo from "./../public/static/images/nav_assets/icon-empleo.svg";
import flechabaja from "./../public/static/images/nav_assets/flecha-baja.svg";
import iconcv from "./../public/static/images/nav_assets/icon-cv.svg";
import iconsesion from "./../public/static/images/nav_assets/icon-sesion.svg";
import Link from "next/link";

const Nav = () => {
    return(
       <div className="header-container">
        <div className="container-logo">
            <Image className="w-full" src={logo}/>
        </div>
        <div className="container-slogan">
            <Image className="slogan" width = {126} height = {19} src={slogan}/>
        </div>
        <div className="container-input-search">
            <Image className="icon-search" width = {15} height = {15} src={iconsearch}/>
            <input className="input-search" type="text" placeholder="Buscar..."/>
        </div>
        <div className="container-icon-hamburg">
            <Image className="icon-hamburg" width = {20} height = {18} src={iconhamburg}/>
        </div>
        <nav className="container-nav">
            <ul className="subcontainer-nav">
                <li>
                    <Image className="icon-admon" width = {20} height = {16} src={iconadmon}/>
                    <Link href="/"><a>Administración</a></Link>
                    <Image className="icon-mini2" width = {9} height = {9} src={iconmini2}/>
                </li>
                <li>
                    <Image className="icon-empleo" width = {20} height = {16} src={iconempleo}/>
                    <Link href="/"><a>Empleo</a></Link>
                    <Image className="flecha-baja" width = {14} height = {14} src={flechabaja}/>
                </li>
                <li>
                    <Image className="icon-cv" width = {23} height = {18} src={iconcv}/>
                    <Link href="/"><a>My CV</a></Link>
                </li>
                <li>
                    <Image className="icon-sesion" width = {20} height = {16} src={iconsesion}/>
                    <Link href="/"><a>Daniel</a></Link>
                    <Image className="flecha-baja" width = {14} height = {14} src={flechabaja}/>
                </li>
            </ul>
        </nav>
       </div>
    );
};

export default Nav;