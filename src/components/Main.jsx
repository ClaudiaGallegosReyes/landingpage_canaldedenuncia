import React from 'react';
import ContextComponent from './ContextComponent';
import LawAspectsComponent from './LawAspectsComponent'
import GroupDescriptionComponent from './GroupDescriptionComponent';
import NumberDescriptionBelowComponent from './NumberDescriptionBelowComponent'
import DescriptionIconComponent from './DescriptionIconComponent'
import { NumberDescriptionSideComponentOptions, NumberDescriptionSideComponentProcess } from './NumberDescriptionSideComponent';
import ConclusionComponent from './ConclusionComponent';
import FinalComponent from './FinalComponent';
import Navbar from './Navbar.jsx';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';
import '../styles/App.css'
import '../styles/hiddenShowClasses.css';

const MainComponent = () => {
    useIntersectionObserver('.hidden', 'show');


    return (
        <div className='mainBody'>
            <Navbar />
            <div className='div_mainTitle'>
                <h1 className='h1_mainTitle'>Asistente <br /> virtual <br /> laboral</h1>
                <div className='rectangle1 hidden'></div>
                <div className='rectangle2 hidden'></div>
            </div>
            <div>
                <div>
                    <ContextComponent  />

                    <LawAspectsComponent />

                    <GroupDescriptionComponent />

                    <div className='div_problemDescriptionContainer'>
                        <h1 className='h1_problemTitle'>Problema</h1>
                        <p  className='p_problemDescription'>En la actualidad la forma de trabajar esta evolucionando de forma acelerada, el marco regulatorio está planteando
                        una serie de desafíos a los empleadores considerando también que los colaboradores presentan demandas claras
                        y esperan un alto estandar de cumplimiento de parte de quienes representan a las empresas. Es difícil estar alerta
                        a todas las demandas y requerimientos que deben cumplir los empleadores para cumplir con su deber de cuidar
                        por el bienestar psicológico y físicos de sus empleados.</p>
                        <h1 className='h1_problemTitle hidden'>¿Cómo abordar este complejo escenario?</h1>
                    </div>
                    <figure className='figure_problemImage'></figure>

                    <NumberDescriptionBelowComponent />

                    <DescriptionIconComponent />

                    <div className='div_processDescriptionContainer'>
                        <h2 className='h2_subtitle'>recibes una denuncia</h2>
                        <div className='div_processTitleRectangle hidden'></div>
                    </div>

                    <NumberDescriptionSideComponentOptions />

                    <div className='div_issueProcess'>
                        <h1>La denuncia se carga en el asistente virtual laboral empleador</h1>
                    </div>

                    <div className='div_processDescriptionContainer'>
                        <h2 className='h2_subtitle'>como es el proceso</h2>
                        <div className='div_processTitleRectangle hidden'></div>
                    </div>

                    <NumberDescriptionSideComponentProcess />

                    <ConclusionComponent />

                    <FinalComponent />
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
