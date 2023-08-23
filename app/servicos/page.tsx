import React from "react";

import ServicosSection from "@/components/Sections/ServicosSection/ServicosSection";
import BreadCrumbGenerico from "@/components/BreadCrumbGenerico/BreadCrumbGenerico";

export default function Page(){
    return(
        <>
        <BreadCrumbGenerico props='Serviços'/>
        <ServicosSection/>
        </>
    )
}