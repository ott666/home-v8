'use client'
import BreadCrumbGenerico from "@/components/BreadCrumbGenerico/BreadCrumbGenerico";
import GoogleMaps from "@/components/GoogleMaps";
import ContactSection from "@/components/Sections/ContactSection/ContactSection";
import React from "react";


export default function page(){
    return(
        <>
        <BreadCrumbGenerico props='Contato'/>
        <ContactSection/>
        <GoogleMaps/>
        
        </>
    )
}