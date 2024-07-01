import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const aspects = [
    { 
        title: 'Confidencialidad', 
        description: 'Se debe asegurar el manejo de información, de forma segura tanto de los nombres de los involucrados y antecedentes presentados. Debes cuidar como empleador de velar porque toda la cadena que participa del proceso lo haga con cuidado.',
        number: '1'
    },
    { 
        title: 'Celeridad', 
        description: 'Cuando recibes una denuncia, tienes 30 días para actuar, y luego resuleta la investigación, tienes dos días para formalizar tu informe de investigación a la DT. No hay tiempo que perder.',
        number: '2'
    },
    { 
        title: 'Imparcialidad', 
        description: 'Debes asegurar que el análisis de las denuncias que recibas sean abordadas de forma imparcial.',
        number: '3'
    },
    { 
        title: 'Perspectiva de género', 
        description: 'Debes velar porque  el proceso de investigación, en todas sus etapas, garantice la inclusión de perspectiva de género.',
        number: '4'
    },
];

const LawAspectsComponent = () => {
    useIntersectionObserver('.hidden', 'show');
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className='div_lawAspectsComponent'>
            <div className='div_lawPrinciplesTitle'>
                <h1 className='h1_lawPrinciplesTitle'>¿Why? <br/>
                Porque te ayudamos a cumplir 
                los Principios de la Ley</h1>
            </div>
            <div className='div_lawAspects'>
                {aspects.map((data, index) => (
                        <div key={index}  className={`div_lawAspectItem ${visibleIndex === index ? 'expanded' : ''}` }>
                            <div className='div_lawAspectHeader'>
                                <div className='div_lawAspectNumber'>{data.number}</div>
                                <article className='article_lawAspectTitle' onClick={() => toggleVisibility(index)}>{data.title} {visibleIndex === index ? '-' : '+'}</article>
                            </div>
                            <div className={`p_lawAspectDescription ${visibleIndex === index ? 'expand' : 'retract'}`}> 
                                <p>{data.description}</p>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default LawAspectsComponent;
