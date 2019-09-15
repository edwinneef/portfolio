import * as React from 'react';
import * as emailJS from 'emailjs-com';

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

  validateForm(): boolean {
    if(this.state.name != '' && this.state.email != '' && this.state.message) {
      return true
    }
    return false
  }

  sendEmail() {
    let templateID = process.env.REACT_APP_EMAILJS_TEMPLATE ? process.env.REACT_APP_EMAILJS_TEMPLATE : '';
    let userID = process.env.REACT_APP_EMAILJS_USER ? process.env.REACT_APP_EMAILJS_USER : ''

    var templateParams = {
      from_name: this.state.name + '(' + this.state.email + ')',
      to_name: 'Edwin',
      subject: this.state.subject ? this.state.subject : 'Nieuw bericht via contact formulier www.edwinneef.nl',
      message_html: this.state.message
    }

    emailJS.send('gmail', templateID, templateParams, userID);
  }

  handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let emptyFields : string[] = []

    this.state.name == '' && emptyFields.push('naam')
    this.state.email == '' && emptyFields.push('e-mail')
    this.state.message == '' && emptyFields.push('bericht')

    if(this.validateForm()) {

      this.sendEmail()

      this.setState({
        ...this.state,
        showNotification: true,
        notification: 'Je e-mail is verzonden, bedankt!',
        notificationType: 'success',
        name: '',
        email: '',
        subject: '',
        message: ''
      })

    } else {

      let emptyFieldsMessage = 'De volgende velden zijn niet (goed) ingevuld: '
      const emptyFieldsString = emptyFields.join(', ')

      emptyFieldsMessage = emptyFieldsMessage + emptyFieldsString

      this.setState({
        ...this.state,
        showNotification: true,
        notification: emptyFieldsMessage,
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

    let showErrors:boolean = false;

    (() => {
      if(this.state.showNotification && this.state.notificationType == 'error') {
        showErrors = true
      }
    })()

    return (
        <div className={this.props.show ? 'contact contact--show' : 'contact'}>
            <div className="contact-background" onClick={this.props.hideForm} />
            <div className="contact__inner">
              <div className="contact__close" onClick={this.props.hideForm} />
              <form className="contact__form" onSubmit={(e) => this.handleSubmit(e)} noValidate>
                <h3 className="contact__title">Contact formulier</h3>

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
                    className={`contact__field${(showErrors && this.state.name == '') ? ' contact__field--error' : ''}`}
                    value={this.state.name} 
                    onChange={(e) => { this.setState({...this.state, name: e.currentTarget.value})}}
                    type="text" 
                    name="name" 
                    required
                    placeholder="Edwin Neef">
                  </input>
                </div>

                <div className="contact__row">
                  <span className="contact__label">*E-mail</span>
                  <input 
                    className={`contact__field${(showErrors && this.state.email == '') ? ' contact__field--error' : ''}`}
                    value={this.state.email} 
                    onChange={(e) => { this.setState({...this.state, email: e.currentTarget.value})}}
                    type="email"
                    name="email"
                    required
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
                    required
                    className={`contact__field contact__field--textarea${(showErrors && this.state.message == '') ? ' contact__field--error' : ''}`}
                    value={this.state.message} 
                    onChange={(e) => { this.setState({...this.state, message: e.currentTarget.value})}}                    
                    name="message" 
                    placeholder="Hoi Edwin, ..."
                  >
                  </textarea>
                </div>

                <div className="contact__row contact__row--action">
                  <input className="btn btn--primary" type="submit" value="Verstuur e-mail" />
                </div>              
              </form>
            </div>
        </div>
      )
  }
}