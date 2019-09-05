import * as React from 'react';
import { headerSection } from '../helpers';


export default function headerComponent(props: headerSection) {
    return(
        <header className="header">

            <div className="header__inner">
              <div className="header__content">
                <h1>{props.title}</h1>
                <p className="header__intro-text" dangerouslySetInnerHTML={{__html: props.intro}}></p>
                <div className="header__actions">
                  <button className="btn btn--primary">{props.mail_button.text}</button>
                </div>
              </div>
              
            </div>

            <svg className="header__background-image" viewBox="0 0 1600 198">
              <defs>
                <linearGradient id="a" x1="0%" x2="50%" y1="-30.959%" y2="100%">
                  <stop stop-color="#FFFFFF" stop-opacity=".04" offset="0%"/>
                  <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"/>
                </linearGradient>
              </defs>
              <path fill="url(#a)" fill-rule="evenodd" d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z" transform="matrix(-1 0 0 1 1600 0)"/>
            </svg>

        </header>
    )
}
