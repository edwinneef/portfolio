import * as React from 'react';
import { referencesSection } from '../types';
import { Swipeable } from 'react-swipeable'

type ReferencesState = {
    currentReference: number
}

export default class ReferencesComponent extends React.Component<referencesSection, ReferencesState> {

    constructor(props: referencesSection) {
        super(props);
        this.state = {
            currentReference: 0
        }
    }

    handleNext() {
        this.setState({
            ...this.state,
            currentReference: (this.props.references.length > this.state.currentReference + 1) ? this.state.currentReference + 1 : 0
        })
    }

    handlePrevious() {
        this.setState({
            ...this.state,
            currentReference: this.state.currentReference == 0 ? this.props.references.length - 1 : this.state.currentReference - 1
        })
    }


    render() {

        const currentReference = this.props.references[this.state.currentReference];

        return(
            <section className="block block--references">
                <div className="block__inner">

                    <header className="references__header">
                        <h2 className="references__heading heading--centered">
                            {this.props.title}
                        </h2>
                    </header>

                    <Swipeable 
                            onSwipedRight={(e) => this.handleNext()}
                            onSwipedLeft={(e) => this.handlePrevious()}
                            trackMouse={true} >
                        <ul className="references__list">
                            <li>
                                <div className="reference__inner">
                                    <h3 className="reference__heading">{currentReference.name}</h3>
                                    <span className="reference__function">
                                        <strong>{currentReference.function}</strong>
                                        {currentReference.company && currentReference.company_url && (
                                        <span> bij <a href={currentReference.company_url} rel="nofollow" target="_blank">{currentReference.company}</a></span>
                                        )}
                                        {currentReference.company && !currentReference.company_url && (
                                        <span> bij {currentReference.company}</span>
                                        )}
                                    </span>
                                    <div className="reference__text">
                                        {currentReference.text}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Swipeable>

                    <ul className="references__controls">
                        {this.props.references.map((e, index) => (
                            <li key={index} onClick={() => {
                                this.setState({...this.state,
                                    currentReference: index
                                })
                            }} className={index == this.state.currentReference ? 'active' : 'unactive'}><span className="sr-text">Reference {index}</span></li>
                        ))}
                    </ul>
                    {/* <span onClick={() => this.handlePrevious()}>Previous</span>
                    <span onClick={() => this.handleNext()}>Next</span> */}
                </div>
            </section>
        )
    }
}