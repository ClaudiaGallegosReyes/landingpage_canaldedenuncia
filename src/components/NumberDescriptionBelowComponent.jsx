import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';
import organizationIcon from '../img/organizationIcon.png';
import researchIcon from '../img/researchIcon.png';
import webIcon from '../img/webIcon.png';

const services = [
    { 
        title: 'WhyWa/reporte de incidente',
        description: 'Plataforma web, que es un canal de denuncia, que te permite recibir de forma segura y sistematizada las denuncias por acoso laboral, acoso sexual o situaciones de violencia que se generan en tu organizacion. Asegurate de contar con un espacio confiable para reportar incidentes de manera confidencial y segura, acorde al requerimiento legal de validación de recepción. Administra de forma eficiente las denuncias ingresadas y  realiza el seguimiento de forma oportuna.', 
        icon: webIcon,
        number: '1'
    },
    { 
        title: 'WhyWa/análisis de denuncia', 
        description: 'Herramienta basada en inteligencia artificial que permite el análisis de denuncias de manera eficiente y precisa. WhyWa/análisis de denuncia analiza cada denuncia, contrastándola con la legislación vigente, el reglamento interno de orden higiene y seguridad de tu empresa y cualquier otro marco normativo relevante. Como resultado, te entrega un informe detallado, te orienta en las acciones a seguir y te alerta de posibles riesgos. Reduce el esfuerzo destinado al análisis de la denuncia para que puedas rápidamente proceder con la investigación.', 
        icon: researchIcon,
        number: '2'
    },
    { 
        title: 'WhyWa/orientador laboral',
        description: 'Es un asistente virtual que ofrecer orientación en tiempo real, disponible 7/24, a los colaboradores sobre situaciones de acoso y violencia que puedan verse expuestos con razón del ejercicio de su cargo. Basado en tus propios procedimientos, en tu reglamento interno de orden higiene y seguridad y en todo el marco regulatorio laboral vigente, entre otros,  WhyWa/orientadorlaboral,  proporciona respuestas precisas y fundamentadas ante consultas de tus colaboradores. Te facilita cumplir con tus responsabilidades como empleador en cuanto a la prevención, información y capacitación. Te ayuda a identifica los temas que generan más consultas y abordarlos de forma proactiva.', 
        icon: organizationIcon,
        number: '3'
    }
 ];

const NumberDescriptionBelowComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div id='servicesDescription' className={`div_numberDescriptionBelowComponent ${visibleIndex !== null ? 'expanded' : 'collapsed'}`}>
            <h2 className='h2_subtitle'>contratando nuestros servicios</h2>
            <div className='div_solutionTitleRectangle hidden'></div>
            <div className='div_servicesItems'>
                {
                services.map((data, index) => (
                    <article key={index} className='article_solutionItem hidden'>
                        <img className='img_descIcon' src={data.icon} alt={data.title} />
                        <h2 className='h2_solutionNumber hidden'>{data.number}</h2>
                        <h2 className='h2_solutionTitle'>{data.title}</h2>
                        <button className='button_solutionDesc' onClick={() => toggleVisibility(index)}>{visibleIndex === index ? 'Ocultar' : 'Saber más'}</button>
                        <div className={`p_solutionDescription ${visibleIndex === index ? 'expand' : 'retract'}`}>
                            <p>{data.description}</p>
                        </div>
                    </article>
                ))
                }
            </div>
        </div>
    );
};

export default NumberDescriptionBelowComponent;
