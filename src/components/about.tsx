import * as React from 'react';
import { aboutSection } from '../types';

export default function AboutComponent(props: aboutSection) {
    return(
        <section className="block block--about">
            <div className="block__inner">
                <div className="about__content">
                    <div className="about__text">
                        <header className="about__header">
                            <h2 className="about__heading">{props.title}</h2>
                            <p className="about__intro">{props.intro_text}</p>
                        </header>
                        {props.image && props.viewport != 'desktop' &&
                        <figure className="about__visual about__visual--mobile">
                            <img src={props.image.url} alt={props.image.alt} />
                        </figure>
                        } 
                        <div className="about__body text-styled">
                            {typeof props.text == 'object' ? props.text.map((e, index) => <p key={index}>{e}</p>) : <p>{props.text}</p>}
                        </div>
                           
                    </div>
                    {props.image_desktop && props.viewport == 'desktop' &&
                    <figure className="about__visual about__visual--desktop">
                        <img src={props.image_desktop.url} alt={props.image_desktop.alt} />
                    </figure>
                    }

                </div>
            </div>
        </section>
    )
}