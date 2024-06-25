import React from 'react';
import processImg from '../img/processImg.png'


const ConclusionComponent = () => {

    return (
        <div className='div_conclusionComponent'>
            <figure className='figure_conclusionImage'></figure>
            <aside className='aside_conclusionTextContainer'>
                <h1 className='h1_conclusionTitle'>muchos de los Problemas</h1>
                <p className='p_conclusionParagraph'>Se producen debido al incumplimiento de los requisitos legales establecidos por la
                    Ley, lo que ocasiona vulnerabilidades para los empleadores en caso de inspecciones
                    o demandas legales.</p>
                <h1 className='h1_conclusionTitle'>Asegurate de cumplir con todo, apoyandote en asistente virtual laboral</h1>
                <img className='img_processImg' src={processImg}></img>
            </aside>
        </ div>
    );
};

export default ConclusionComponent;
