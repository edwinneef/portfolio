import * as React from 'react';
import { referencesSection } from '../types';

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
        return(
            <section className="block block--references">
                <div className="block__inner">

                    <header className="references__header">
                        <h2 className="references__heading heading--centered">
                            {this.props.title}
                        </h2>
                    </header>

                    <ul className="references__list">
                        {this.props.references.map((e, index) => (
                        <li key={index} className={index == this.state.currentReference ? 'show' : 'hide'}>
                            <div className="reference__inner">
                                <h3 className="reference__heading">{e.name}</h3>
                                <span className="reference__function">{e.function}</span>
                                <div className="reference__text">
                                    {e.text}
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>

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