import * as React from 'react';
import { servicesSection } from '../types';

export default function ServicesComponent(props: servicesSection) {
    return(
        <section className="block block--services">
            <div className="block__inner">

                <header className="services__header">
                    <h2 className="services__heading heading--centered">
                        {props.title}
                    </h2>
                </header>

                <ul className="services__list">
                    {props.services.map((e, index) => (
                    <li key={index}>
                        <div className="service__inner">
                            <svg className="service__icon">
                                <use xlinkHref={`#${e.icon}`} />
                            </svg>
                            <h3 className="service__heading">{e.title}</h3>
                            <div className="service__text">
                                {e.text}
                            </div>
                            
                        </div>
                        <div className="service__after">
                            {e.terms}
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}