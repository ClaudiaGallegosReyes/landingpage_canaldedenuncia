import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const services = [
    { 
        description: 'entrenar al sistema con procedimiento, normativa de cada empresa. En la Ley y sus disposiciones. En los dictámenes que vayan gestando precedentes. También se entrena en manejo de situaciones complejas, información de lo que debe hacer el empleador y plazos para hacerlo', 
        number: '1'
    },
    { 
        description: 'el procesador de IA analiza la denuncia en base a la información y parámetros en los cuales está entrenado. resguardando la seguridad y confidencialidad de la información analizada', 
        number: '2'
    },
    { 
        description: 'el procesador de IA devuelve un primer análisis de la denuncia. Brinda explicación y justificación de lo que se debe hacer. Entrega recomendaciones de Mediación, aplicación de medidas de resguardo de denunciante y denunciado. Hace un recordatorio de resguardo de confidencialidad e imparcialidad. Brinda orietaci en caso que corresponda denuncia en MP por delito', 
        number: '3'
    }
 ];

 const options = [
    { 
        description: 'Por nuestro Canal de denuncia', 
        letter: 'A'
    },
    { 
        description: 'Por el canal de denuncia que tengas preestablecido. No es problema que ya tengas tu canal o que no te interese contratar nuestro canal por las razones que sea', 
        letter: 'B'
    }
 ];


const NumberDescriptionSideComponentProcess = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <div className='div_numberDescriptionSideComponent'>
            <div className='div_servicesItems'>
                {services.map(function(data) {
                    return (
                        <article className='article_processItem hidden'>
                            <div className='div_processNumber'><h2 className='h2_processNumber'>{data.number}</h2></div>
                            <p className='p_processDescription'>{data.description}</p>
                        </article>
                    )
                })}
            </div>
        </div>
    );
};

const NumberDescriptionSideComponentOptions = () => {

    return (
        <div className='div_numberDescriptionSideComponent'>
            <div className='div_servicesItems'>
                {options.map(function(data) {
                    return (
                        <article className='article_processItem hidden'>
                            <div className='div_processNumber'><h2 className='h2_processNumber hidden'>{data.letter}</h2></div>
                            <p className='p_processDescription'>{data.description}</p>
                        </article>
                    )
                })}
            </div>
        </div>
    );
};

export {
    NumberDescriptionSideComponentProcess,
    NumberDescriptionSideComponentOptions
  }