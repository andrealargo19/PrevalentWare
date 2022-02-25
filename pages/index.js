import React, { useState, useEffect } from "react";
import Form from "../components/Forms";
import Nav from "../components/Nav";
import Main from "./main";
import Documents from "../components/Documents";
import Buttons from "../components/Buttons";
import Controls from "../components/Controls";
import Head from 'next/head';
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export const getServerSideProps = async () => {
    const companies = await prisma.companies.findMany();
    return {
        props: {
                companies: companies
        }
    };
};

const Home = (props) => {
    const [compan, setCompan] = useState(props.companies);
    const [position, setPosition] = useState(0);
    const [expanded, setExpanded] = useState(true);
    const currentCompany = compan[position];
    const brake_point = 768;


    const setNextCompany = (event) => {
        let counter = 0
        if (event.id === 'next' && position < compan.length - 1) {
            counter = 1
        } else if (event.id === 'back' && position > 0) {
            counter = -1
        }
        setPosition(prevPosition => prevPosition + counter);
    }

    const resetExpanded = () => {
        if (window.innerWidth < brake_point) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", resetExpanded);
    }, []);
    
    const showCompanyInfo = () => {
        if (window.innerWidth < brake_point) {
            document.getElementById("reference_point").scrollIntoView({behavior: "smooth"});
        } else {
            setExpanded(false);
        }
    }

    const putData = async (pos, target) => {
        const myDataObject = {
            id:pos,
            value:target
        };
        const response = await fetch('/api/companies', {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(myDataObject)
        });
        const data = await response.json( );
    };

    const updateCompany = async (e) => {
       try {
           let action;
           if (e.id == "accept") {
                action = true;
           } else {
                action = false;
           }
           await putData(position + 1, action);
       } catch (err) {
           console.log(err);
       }
    };
         

    return(
        <div>
            <div>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
                </Head>
            </div>
            <Nav />
            <div className={"block " + (expanded ? "md:block lg:block xl:block 2xl:block" : "md:hidden lg:hidden xl:hidden 2xl:hidden")}>
                <Main cardClick={showCompanyInfo}/>
            </div>
            <div className={"tittle-init "+ (expanded ? "md:hidden lg:hidden xl:hidden 2xl:hidden" : "md:block lg:block xl:block 2xl:block")}>
                <h4><span>Administración</span> / Aprobación de Empresas</h4>
            </div>
            <div id="reference_point"></div>
            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                <Controls nextCompany={setNextCompany}/>
            </div>
            <div className={"buttons-desktop hidden " + (expanded ? "md:hidden lg:hidden xl:hidden 2xl:hidden" : "md:block lg:block xl:block 2xl:block")}>
                    <Buttons clickUpdate={updateCompany}/>
            </div>
            <div className={"block " + (expanded ? "md:hidden lg:hidden xl:hidden 2xl:hidden" : "md:block lg:block xl:block 2xl:block")}>
                <div className="container-index-general">
                    <Form company={currentCompany}/>
                    <Documents/>
                </div>
                <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
                    <Buttons clickUpdate={updateCompany}/>
                </div>
            </div>
            <div className={"mt-8 hidden "+ (expanded ? "md:hidden lg:hidden xl:hidden 2xl:hidden" : "md:block lg:block xl:block 2xl:block")}>
                <Controls nextCompany={setNextCompany}/>
            </div>
        </div>
    );
};

export default Home;