import * as React from 'react';
import { introSection } from '../helpers';

export default function IntroComponent(props: introSection) {
    return(
        <section className="block block--intro">
            <div className="block__inner">
                <h2>Intro:</h2>
                {props.intro_title}
            </div>
        </section>
    )
}