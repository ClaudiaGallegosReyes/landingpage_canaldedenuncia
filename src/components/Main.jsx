import React from 'react';
import ContextComponent from './ContextComponent';
import LawAspectsComponent from './LawAspectsComponent'
import GroupDescriptionComponent from './GroupDescriptionComponent';
import NumberDescriptionBelowComponent from './NumberDescriptionBelowComponent'
import NumberDescriptionSideComponent from './NumberDescriptionSideComponent';
import ConclusionComponent from './ConclusionComponent';
import Navbar from './Navbar.jsx';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';
import circle from '../img/circle.png'
import '../styles/App.css'
import '../styles/hiddenShowClasses.css';

const MainComponent = () => {
    useIntersectionObserver('.hidden', 'show');
    
    const whatsappUrl = "https://wa.me/56949395999?text=Hola";


    return (
        <div className='mainBody'>

            <Navbar whatsappUrl={whatsappUrl} />

            <div className='div_mainTitle'>
                <div className='div_mainTitleButton'>
                    <h1 className='h1_mainTitle'>WhyWa</h1>
                    <img className='img_mainTitle hidden' src={circle}></img>
                    <h2 className='h2_mainSubTitle'>we hear you, we act</h2>
                    <p className='p_mainDesc'>Servicios digitales que facilitan a los empleadores la gestión de denuncias generadas por acoso laboral, acoso sexual y situaciones de violencia en el trabajo</p>
                    <button className='button_contact' onClick={() => window.location.href = whatsappUrl}>📱 Contáctanos</button>
                </div>
            </div>
            <div>
                <div>
                    <ContextComponent  />

                    <div className='div_problemDescriptionContainer'>
                        <h1 className='h1_problemTitle'>¿Has pensado, como optimizar tu operación para responder a los requerimientos de la Ley 21.643?</h1>
                        <p  className='p_problemDescription'>Imaginemos que como empleador ya cuentas con tu protocolo de acción frente al acoso laboral, acoso sexual y situaciones de violencia con razón de ejercicio del cargo ¿Cómo atender las denuncias que recibas de estos casos con la minuciosidad y celeridad que se requiere? ¿Quién del equipo estará al tanto de todo el detalle del protocolo, del reglamento interno, del código de ética, de los últimos dictámenes de la DT como para analizar las denuncias de forma certera y rápida? ¿Cómo asegurar cumplir con los principios de celeridad, imparcialidad, perspectiva de género y confidencialidad que dispone la Ley? 
                        Es difícil estar alerta a todas las demandas y requerimientos que deben cumplir los empleadores.
                        </p>
                        <h1 className='h1_problemTitle hidden'>¿Cómo abordar este complejo escenario?</h1>
                    </div>
                    <figure className='figure_problemImage'></figure>

                    <NumberDescriptionBelowComponent />

                    <div className='div_processDescriptionContainer'>
                        <h2 className='h2_subtitle'>como es el proceso para usar WhyWa</h2>
                        <div className='div_processTitleRectangle hidden'></div>
                    </div>

                    <NumberDescriptionSideComponent />

                    <div className='div_processDescriptionContainer'>
                        <h2 className='h2_subtitle'> </h2>
                        <div className='div_processTitleRectangle hidden'></div>
                    </div>

                    <GroupDescriptionComponent />

                    <LawAspectsComponent />
                
                    <div className='div_issueProcess'>
                        <h2>¿Why? <br/>
                        Porque te ayudamos a ser más eficiente</h2>
                        <p>Nuestos distintos servicios, que puedes comprar paquetizados o de forma individual, en contratos por subscripción, te permite reducir los esfuerzos del equipo interno, los costos de asesorías legales para el análisis de los casos, agiliza el tiempo de respuesta y asegura que las acciones son coherentes con tus procedimientos y marco legal, contribuyendo a una gestión más efectiva y justa.
                        Te facilitamos la obligación de informar, capacitar y prevenir al contar con nuestros servicios.</p>
                    </div>

                    <ConclusionComponent whatsappUrl={whatsappUrl} />

                </div>
            </div>
        </div>
    );
};

export default MainComponent;
