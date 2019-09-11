import * as React from 'react';
import { headerSection, stateType } from '../types';
import Waves from './waves';

type headerProps = headerSection & {
  scrolled: boolean
  showForm?: () => void
}

export default function headerComponent(props:headerProps) {
    return(
        <header className="header">

            <div className="header__inner">
              <div className="header__content">
                <h1>{props.title}</h1>
                <p className="header__intro-text" dangerouslySetInnerHTML={{__html: props.intro}}></p>
                <div className="header__actions">
                  <button className={`btn btn--black-white btn--mail ${props.scrolled && 'btn--mail--hide'}`} onClick={props.showForm}>{props.mail_button.text}</button>
                  <button className="btn-hollow btn-hollow--white">{props.secondary_button}</button>
                </div>
              </div>
              
            </div>

            <Waves waveOpacity={0.03} />
        </header>
    )
}
