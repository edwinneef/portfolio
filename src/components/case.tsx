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

                        {props.live_demo_url && (
                            <a href={props.live_demo_url} className="btn btn--primary" target="_blank" rel="nofollow">Live demo</a>
                        )}

                        {props.github_url && (
                            <a href={props.github_url} className="btn-hollow btn-hollow--white" target="_blank" rel="nofollow">Github Repo</a>
                        )}

                        {props.dribbble_url && (
                            <a href={props.dribbble_url} className="btn-hollow btn-hollow--white" target="_blank" rel="nofollow">Dribbble</a>
                        )}
                    </div>
                </div>
                <div className="case__visual">
                    <figure className="case-visual case-visual--desktop">
                        <img src="/images/desktop.png" alt="" />
                    </figure>
                    <figure className="case-visual case-visual--tablet">
                        <img src="/images/tablet.png" alt="" />
                    </figure>
                    <figure className="case-visual case-visual--mobile">
                        <img src="/images/mobile.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}