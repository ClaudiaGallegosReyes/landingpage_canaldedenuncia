import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.js';

const aspects = [
    { 
        title: 'confidencialidad', 
        number: '1'
    },
    { 
        title: 'celeridad', 
        number: '2'
    },
    { 
        title: 'imparcialidad', 
        number: '3'
    },
    { 
        title: 'perspectiva de género', 
        number: '4'
    },
 ];



const LawAspectsComponent = () => {
    useIntersectionObserver('.hidden', 'show');

    return (
        <div className='div_lawAspectsComponent'>
            <div className='div_lawPrinciplesTitle'><h1 className='h1_lawPrinciplesTitle'>principios de la Ley</h1></div>
            <div className='div_lawAspects'>
            {aspects.map(function(data) {
                return (
                    <>
                    <div className='div_lawAspectBackground hidden'>
                        <div className='div_lawAspectNumber'>{data.number}</div>
                        <article className='article_lawAspectTitle'>{data.title}</article>
                    </div>
                    </>
                )
            })}
            </div>
        </div>
    );
};

export default LawAspectsComponent;
