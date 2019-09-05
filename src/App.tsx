import React from 'react';
import HeaderComponent from './components/header';
import IntroComponent from './components/intro';

import appState, { appStateType, sectionType } from './helpers';
import CaseComponent from './components/case';

type AppProps = {

}

export default class App extends React.Component<AppProps, appStateType> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      sections: appState.sections
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.sections.map(b => {
          switch(b.type) {
            case 'header':
              return <HeaderComponent {...b} />;
            case 'intro':
              return <IntroComponent {...b} />;
            case 'case':
              return <CaseComponent {...b} />;
            default:
              return null;
          }
        })}
      </div>
    );
  }
}
