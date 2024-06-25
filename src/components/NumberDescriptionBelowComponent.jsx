import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const services = [
    { 
        title: 'Canal de denuncia',
        description: '', 
        number: '1'
    },
    { 
        title: 'Asistente virtual laboral', 
        description: 'Analiza tus denuncias y entrega un informe con los pasos que debes seguir y precauciones que debes recordar.', 
        number: '2'
    },
    { 
        title: 'Asistente virtual laboral',
        description: 'Brinda orientación a tus colaboradores para atender sus consultas respecto a tu procedimiento, reglamento y orientación ante situaciones específicas.', 
        number: '3'
    }
 ];



const NumberDescriptionBelowComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <div id='servicesDescription' className='div_numberDescriptionBelowComponent'>
            <h2 className='h2_subtitle'>contratando nuestros servicios</h2>
            <div className='div_solutionTitleRectangle hidden'></div>
            <div className='div_servicesItems'>
                {services.map(function(data) {
                    return (
                        <article className='article_solutionItem hidden'>
                            <h2 className='h2_solutionNumber hidden'>{data.number}</h2>
                            <h2 className='h2_solutionTitle'>{data.title}</h2>
                            <p className='p_solutionDescription'>{data.description}</p>
                        </article>
                    )
                })}
            </div>
        </div>
    );
};

export default NumberDescriptionBelowComponent;
