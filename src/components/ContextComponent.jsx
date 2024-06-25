import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const ContextComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <div className='div_contextComponent'>
            <h2 className='h2_subtitle'>contexto</h2>
            <div className='div_contextTitleRectangle hidden'></div>
            <p className='p_contextParagraph'>El marco regulatorio en el ámbito laboral, ha establecido en el último tiempo una serie de obligaciones a los
empleadores que demandan diseñar e implementar cambios, considerando que la prestación del servicio a que el
trabajador se obliga debe efectuarse en condiciones que salvaguarden su integridad y salud. <br /><br />
En Agosto 2024 entrará en vigencia la Ley N 21.643, que busca fortalecer la regulación en materia de prevención,
investigación y sanción del acoso laboral, sexual o de violencia en el trabajo. Esta modificación de la Ley,
establece tres ejes de trabajo para los empleadores : 1. prevención, estableciendo el mandato de Informar,
Capacitar, Resguardar y Actuar. 2. Investigar, 3. sanción. <br /><br />
solo esta Ley y sus tres ejes plantea una serie de obligaciones a los empleadores, por lo que hemos generado una
oferta de soluciones tecnológicas que apoyen la gestión diaria, para dar cumplimiento a la norma de manera
efectiva, atendiendo a todas las medidas impuestas por la autoridad, de forma certera y oportuna. Para
automatizar aquellos pasos donde la tecnología puede acotar y eficientar el proceso, para liberar recursos y así
dedicarlos a gestionar espacios de diálogo y gestionsr el cambio de mentalidad en tu organización.</p>
        </div>
    );
};

export default ContextComponent;
