import React, { useState } from 'react';
import organizationIcon from '../img/organizationIcon.png';
import researchIcon from '../img/researchIcon.png';
import webIcon from '../img/webIcon.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const pages = [
    { 
        title: 'Canal de denuncia', 
        description: 'plataforma que asegura la confidencialidad al ser de administración externa, que permite canalizar la recepción de las denuncias, dar cumplimiento a la validación de recepción y administrar el seguimiento de las denuncias ingresadas',
        icon: webIcon
    },
    { 
        title: 'Asistencia virtual laboral - Empleadores', 
        description: 'Garantiza que el análisis de las denuncias está en norma con tu reglamento interno, con el protocolo de acción frente a denuncias, con tu código de ética y lo que quieras internamente considerar. Te ayuda a recordar las medidas de reguardo que debes implementar, los plazos, lo que debes hacer si la denuncia considera un delito (como abuso, robo en vez de acoso)',
        icon: researchIcon
    },
    { 
        title: 'Asistencia virtual laboral - Colaboradores', 
        description: 'facilita el conocimiento y entendimiento de las medidas de prevención orientando de forma rápida, autónoma, siempre disponible multiidioma para que tus colaboradores hagan las consultas de forma segura y reciban una primera orientación de como actuar. Asegúrate de cumplir la ley en cuanto a la prevención, información y capacitación. Identifica los temas que generan más consultas y abordarlos de forma proactiva.',
        icon: organizationIcon
    }
];

const DescriptionIconComponent = () => {
    useIntersectionObserver('.hidden', 'show');
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className='div_descriptionIconComponent'>
            {pages.map((data, index) => (
                <div className='div_iconAndDescContainer' key={index}>
                    <section className='section_iconAndDescription'>
                        <h2 className='h2_descriptionTitle'>{data.title}</h2>
                        <button className='button_expand' onClick={() => toggleVisibility(index)}>
                            {visibleIndex === index ? '...' : 'Saber más'}
                        </button>
                        <p className={`p_descriptionParagraph ${visibleIndex === index ? 'expand' : 'retract'}`}>
                            {data.description}
                        </p>
                    </section>
                    <img className='img_descIcon hidden' src={data.icon} alt={data.title} />
                </div>
            ))}
        </div>
    );
};

export default DescriptionIconComponent;
