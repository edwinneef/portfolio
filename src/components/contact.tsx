import * as React from 'react';

type contactProps = {
  show: boolean
  hideForm: () => void
}

type contactState = {
  name: string
  email: string
  subject: string
  message: string
  showNotification: boolean
  notification: string
  notificationType: 'error' | 'success' | 'neutral' | undefined
}

export default class ContactComponent extends React.Component<contactProps, contactState> {

  constructor(props: contactProps) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      showNotification: false,
      notification: '',
      notificationType: undefined
    }
  }

  handleSubmit() {
    if(this.state.name != '' && this.state.email != '' && this.state.message) {
      this.setState({
        ...this.state,
        showNotification: true,
        notification: 'Je e-mail is verzonden, bedankt!',
        notificationType: 'success'
      })
    } else {
      this.setState({
        ...this.state,
        showNotification: true,
        notification: 'Je e-mail is niet verzonden, heb je alle verplichte (*) velden ingevuld?',
        notificationType: 'error'
      })
    }
  }

  render() {
    
    if(this.props.show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    } 

    return this.props.show ? (
        <div className="contact">
            <div className="contact-background" onClick={this.props.hideForm} />
            <div className="contact__inner">
              <div className="contact__close" onClick={this.props.hideForm} />
              <div className="contact__form">
                <h3>Contact formulier</h3>

                <div className="contact__intro">
                  <p>Geen fan van contact formulieren? Je kunt natuurlijk ook gewoon mailen naar <a href="mailto:edwinneef@gmail.com">edwinneef@gmail.com</a></p>
                </div>

                {this.state.showNotification &&
                <div className={`contact__notification ${this.state.notificationType != undefined ? `contact__notification--${this.state.notificationType}` : ''}`}>
                  <p>{this.state.notification}</p>
                </div>
                }

                <div className="contact__row">
                  <span className="contact__label">*Naam</span>
                  <input 
                    className="contact__field" 
                    value={this.state.name} 
                    onChange={(e) => { this.setState({...this.state, name: e.currentTarget.value})}}
                    type="text" 
                    name="name" 
                    placeholder="Edwin Neef">
                  </input>
                </div>

                <div className="contact__row">
                  <span className="contact__label">*E-mail</span>
                  <input 
                    className="contact__field" 
                    value={this.state.email} 
                    onChange={(e) => { this.setState({...this.state, email: e.currentTarget.value})}}
                    type="email"
                    name="email"
                    placeholder="edwinneef@gmail.com">
                  </input>
                </div>

                <div className="contact__row">
                  <span className="contact__label">Onderwerp</span>
                  <input 
                    className="contact__field" 
                    value={this.state.subject} 
                    onChange={(e) => { this.setState({...this.state, subject: e.currentTarget.value})}}
                    type="text" name="subject" 
                    placeholder="Onderwerp">
                  </input>
                </div>

                <div className="contact__row">
                  <span className="contact__label">*Bericht</span>
                  <textarea 
                    className="contact__field contact__field--textarea" 
                    value={this.state.message} 
                    onChange={(e) => { this.setState({...this.state, message: e.currentTarget.value})}}                    
                    name="message" placeholder="Edwin Neef">
                  </textarea>
                </div>

                <div className="contact__row contact__row--action">
                  <button className="btn btn--primary" onClick={() => this.handleSubmit()}>Verstuur e-mail</button>
                </div>              
              </div>
            </div>
        </div>
      ) : null
  }
}