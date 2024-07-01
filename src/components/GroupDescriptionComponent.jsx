import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';
import photo1 from '../img/leonardo.jpg'
import photo2 from '../img/claudia.jpg'
import photo3 from '../img/luis.png'

const people = [
    { 
        name: 'Luis Zenteno',
        profile: 'Ingeniero Comercial, Mag. Gestión Personas. HR Manager en empresas públicas y privadas de dotaciones de más de 1000 personas.',
        photo: photo3
    },
    { 
        name: 'Claudia Gallegos Reyes',
        profile: 'Psicóloga , MBA. HR Manager en multinacionales y Startup de tecnología. Coach y profesora universitara.',
        photo: photo2
    },
    { 
        name: 'Leonardo Meza',
        profile: 'Arquitecto informático especialista en temas de IA. Amplia experiencia en dirección de consultoría de TI y desarrollo de Software.',
        photo: photo1
    }
    
 ];



const GroupDescriptionComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <div id='groupDescription' className='div_groupDescriptionComponent'>
            <section>
                {people.map(function(data) {
                    return (
                        <article className='article_groupPeopleDesc'>
                            <img className='img_groupImg hidden' src={data.photo} alt={data.title} />
                            <div>
                                <h2 className='h2_groupPeopleName'>{data.name}</h2>
                                <p className='p_groupPeopleProfile'>{data.profile}</p>
                            </div>
                        </article>
                    )
                })}
            </section>
            <div className='div_groupDescriptionContainer hidden'>
                <h1 className='h1_groupDescriptionTitle'>¿Why? Porque somos un grupo multidisciplinario...</h1>
                <p  className='p_groupDescriptionParagraph'>de profesionales con amplia experiencia y expertos en nuestras áreas de acción, comprometidos con el cambio cultural que implica esta nueva normativa. convencidos de los beneficios del uso de tecnología e Inteligencia Artificial para dar cumplimiento a la normativa, en tiempo, forma y cuidando a los empleadores de no cometer alguna falta por desconocimiento u omisión de acción.</p>
            </div>
        </div>
    );
};

export default GroupDescriptionComponent;
