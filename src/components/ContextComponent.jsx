import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const ContextComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <div className='div_contextComponent'>
            <h2 className='h2_subtitle'>contexto</h2>
            <div className='div_contextTitleRectangle hidden'></div>
            <p className='p_contextParagraph'><b>Prevención, investigación y sanción</b>, son los ejes de acción de la Ley 21.643, conocida como Ley Karin, la cual marca un avance significativo en la protección de los derechos laborales en Chile, alineándose con el Convenio 190 de la OIT, que promueve un ambiente de trabajo libre de violencia y acoso. Esta ley establece una serie de responsabilidades adicionales para el empleador.<br/><br/>
            Libera a tu equipo de tareas repetitivas y enfócate en fortalecer la capacidad de tu organización para crear un entorno laboral más seguro y equitativo, apoyándote en nosotros ya que hemos creado una oferta de soluciones tecnológicas, basadas en inteligencia artificial, para apoyar a los empleados en el correcto y certero cumplimiento de la disposiciones de la Ley, permitiendo sistematizar el análisis, el aprendizaje y la eficiencia en el manejo de denuncias. Nuestras soluciones son un aliado clave para optimizar tus procesos, asegurar la calidad de los análisis y tener la tranquilidad de que estas actuando en tiempo, forma y acorde a lo que exige la Ley.<br/><br/>
            Si te gusta lo que lees, descubre lo que podemos hacer por ti.</p>
        </div>
    );
};

export default ContextComponent;
