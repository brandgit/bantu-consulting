import React from 'react';
import { FooterComponent } from '../../components/GlobalComponent/Footer/FooterComponent';
import { ResustsComponent } from '../../components/GlobalComponent/ResustsComponent';
import {TopNosServiceComponent} from "../../components/GlobalComponent/TopNosServiceComponent";
import {resultsItems} from "../../assets/stockages/Stockages"
import { ServicePresentation } from '../../components/GlobalComponent/ServicePresentation';
import { NousContactez } from '../../components/GlobalComponent/NousContactez';
const imageTop = require("../../assets/imagesApp/vectorRH.jpg")

export const ComplémentsDeRevenusScreen = () => {
    return (
        <div>
           <TopNosServiceComponent imageTop={imageTop} 
           nameScreen="Nos pilotages de revenus" bg="imageBgTopNosServices-no"/>
            <ServicePresentation/>
            <ResustsComponent resultsItems={resultsItems}/>
            <NousContactez/>
           <FooterComponent/>
        </div>
    );
};
