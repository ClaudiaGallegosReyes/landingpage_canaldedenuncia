import React from 'react';
import photo from '../img/businessman-hand-stop-dominoes.jpg'


const ConclusionComponent = ({ whatsappUrl }) => {

    return (
        <div className='div_conclusionComponent'>
            <img className='img_conclusionImg' src={photo} />
            <aside className='aside_conclusionTextContainer'>
                <h1 className='h1_conclusionTitle'>¿Why? Porque muchos de los problemas que enfrentas con el fiscalizador..</h1>
                <p className='p_conclusionParagraph'>Se producen debido al incumplimiento de los requisitos legales establecidos por la Ley, lo que ocasiona vulnerabilidades para los empleadores en caso de inspecciones o demandas legales.</p>
                <h1 className='h1_conclusionTitle'>Asegurate de cumplir con todo, apoyandote en WhyWa</h1>
                <button className='button_contact'onClick={() => window.location.href = whatsappUrl}>📱 Contáctanos</button>
            </aside>
        </ div>
    );
};

export default ConclusionComponent;
