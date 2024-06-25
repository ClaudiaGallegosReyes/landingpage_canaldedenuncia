import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const GroupDescriptionComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <div id='groupDescription' className='div_groupDescriptionComponent'>
            <figure className='figure_groupImage'></figure>
            <div className='div_groupDescriptionContainer hidden'>
                <h1 className='h1_groupDescriptionTitle'>¿quiénes somos?</h1>
                <p  className='p_groupDescriptionParagraph'>Grupo multidisciplinario, expertos en nuestras áreas de
acción, comprometidos con el cambio cultural que implica
esta nueva normativa, conscientes de los beneficios del
uso de tecnología para dar cumplimiento a la normativa,
en tiempo, forma y cuidando a los empleadores de no
cometer alguna falta por desconocimiento u omisión de
acción.</p>
            </div>
        </div>
    );
};

export default GroupDescriptionComponent;
