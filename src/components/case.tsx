import * as React from 'react';
import { caseSection } from '../helpers';

export default function CaseComponent(props: caseSection) {
    return(
        <section className="block block--case">
            <div className="block__inner">
                <h2>Case:</h2>
                {props.title}
            </div>
        </section>
    )
}