import * as React from 'react';
import { caseSection } from '../types';
import Waves from './waves';

export default function CaseComponent(props: caseSection) {

    let blockClassName:string = 'block block--case';
    blockClassName = props.color ? blockClassName + ` case--${props.color}` : blockClassName;
    blockClassName = props.align ? blockClassName + ` case--${props.align}` : blockClassName;

    return(
        <section className={blockClassName}>
            <Waves waveOpacity={0.2} mirrored={props.align == 'right' ? true : false} />
            <div className="block__inner">
                <div className="case__text">
                    <div className="case__header">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="case__body">
                        <p>{props.text}</p>
                    </div>
                    <div className="case__actions">

                        {props.buttons.map((e, index) => (
                            <a href={e.url} className="btn btn--primary" target="_blank" rel={e.noFollow ? 'nofollow' : ''} key={index}>{e.text}</a>
                        ))}

                    </div>
                </div>
                <div className="case__visual">
                    <figure className="case-visual case-visual--desktop">
                        <img src={props.image_desktop} alt={`Desktop ${props.title}`} />
                    </figure>
                    <figure className="case-visual case-visual--tablet">
                        <img src={props.image_tablet} alt={`Tablet ${props.title}`} />
                    </figure>
                    <figure className="case-visual case-visual--mobile">
                        <img src={props.image_mobile} alt={`Mobile ${props.title}`} />
                    </figure>
                </div>
            </div>
        </section>
    )
}