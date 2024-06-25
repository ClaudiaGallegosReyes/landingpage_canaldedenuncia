import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const plans = [
    {
        title: 'Standard',
        price: '19.99',
        features: [ 'Primera feature', 'Segunda feature', 'Tercera feature' ]
    },
    {
        title: 'Premium',
        price: '29.99',
        features: [ 'Primera feature', 'Segunda feature', 'Tercera feature' ]
    }
]


const FinalComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <main id='subscription' className='main_finalComponent'>
            <h1 className='h1_finalTitle'>Planes por subscripcion</h1>
            <p className='p_finalDescription'>*Consulta por descuento contratando en julio y agosto</p>
            <div className='div_plansContainer'>
                {plans.map(function(data, index) {
                    return (
                        <article key={index} className='article_planItem hidden'>
                            <h1 className='h1_planTitle'>{data.title}</h1>
                            <p className='p_planPrice'><span className='span_planPriceSymbol'>$</span>{data.price}</p>
                            <div>
                                {data.features.map(function(feature, featureIndex) {
                                    return <p  className='p_planFeature' key={featureIndex}>{feature}</p>;
                                })}
                                <button className='button_planBuy'>Comprar</button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </main>
    );
};

export default FinalComponent;
