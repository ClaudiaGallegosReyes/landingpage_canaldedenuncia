import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const process = [
    { 
        title: 'ONBOARDING',
        description: 'Habilitamos WhyWa/declaración de incidente. Entrenamos WhyWa/análisis de denuncia y WhyWa/orientador laboral con la información de tu organización.', 
        number: '1'
    },
    { 
        title: 'OPERACIÓN',
        description: 'Recibes una denuncia de incidente  y WhyWa/análisis de denuncia y te entrega un informe de los pasos que debes seguir en la etapa de investigación y te alerta sobre temas críticos.', 
        number: '2'
    },
    { 
        title: 'INFORMACIÓN Y CAPACITACION',
        description: 'En paralelo, puedes disponibilizar para tus colaboradores WhyWa/orientador laboral, que atenderá todas sus consultas respecto a acoso laboral, acoso sexual  y prevención de violencia según la Ley y acorde a tus procedimientos internos.', 
        number: '3'
    },
    { 
        title: 'PREVENCIÓN Y ACCIÓN',
        description: 'Habilitamos WhyWa/declaración de incidente. Entrenamos WhyWa/análisis de denuncia y WhyWa/orientador laboral con la información de tu organización', 
        number: '4'
    },
    
 ];


const NumberDescriptionSideComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <div className='div_numberDescriptionSideComponent'>
            <div className='div_processItems'>
                {process.map(function(data) {
                    return (
                        <article className='article_processItem'>
                            <div className='div_processNumber'>
                                <h2 className='h2_processNumber'>{data.number}</h2></div>
                            <div className='p_processDescription'>
                                <h2 className=''>{data.title}</h2>
                                <p >{data.description}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    );
};


export default NumberDescriptionSideComponent;