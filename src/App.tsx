import React from 'react';
import HeaderComponent from './components/header';
import AboutComponent from './components/about';
import { appStateType, caseSection, viewportType } from './types';
import CaseComponent from './components/case';
import appState from './appState';
import ServicesComponent from './components/services';
import ReferencesComponent from './components/references';
import ContactComponent from './components/contact';

type AppProps = {

}

export default class App extends React.Component<AppProps, appStateType> {

  constructor(props: AppProps) {
    super(props);
    this.state = appState;

    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentWillMount() {
    this.handleResize();  
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);    
    window.addEventListener('resize', this.handleResize);    
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);    
  }
  
  handleResize() {
    this.setState({...this.state, windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  handleScroll() {
    let isScrolled:boolean = this.state.scrolled;
    
    isScrolled = window.pageYOffset >= 200 ? true : isScrolled
    isScrolled = window.pageYOffset <= 50 ? false : isScrolled

    this.setState({
      ...this.state,
      scrolled: isScrolled
    })
  }

  render() {

    let viewport : viewportType;

    if (this.state.windowWidth < 768) { viewport = "mobile" }
    if (this.state.windowWidth >= 768 && this.state.windowWidth < 1280) { viewport = "tablet" }
    if (this.state.windowWidth >= 1280) { viewport = "desktop" }

    return (
      <div className="App">

        <ContactComponent scrolled={this.state.scrolled} />

        {this.state.sections.map(b => {
          
          switch(b.type) {
            case 'header':
              return <HeaderComponent {...b} scrolled={this.state.scrolled} />;
            case 'intro':
              return <AboutComponent {...b} viewport={viewport} />;
            case 'case':
              return <CaseComponent {...b} />;
            case 'services':
                return <ServicesComponent {...b} />;
            case 'references':
                return <ReferencesComponent {...b} />;
            default:
              return null;
        }

        })}
      </div>
    );
  }
}
