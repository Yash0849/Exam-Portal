// src/components/ContactMe.js
import React from 'react';
import ContactMeForm from './ContactMeForm';
import ContactMeFormPopup from './ContactMeFormPopup';
import '../styles/contact-me.css';

class ContactMe extends React.Component {
  state = {
    showPopup: false
  };

  handleSubmit = () => {
    this.setState({ showPopup: true });
  };

  handleClosePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <>
      <section className="header">
<h1>React Test App</h1>
      </section>
      <section className="contact-me">
        <h1>Get In Touch</h1>
        <p>
          Send me a valid email address at anytime, I will get back to you as soon
          as I can. <br />
          I promise not to send you any spam or newsletters.
        </p>

        <ContactMeForm onSubmit={this.handleSubmit} />
        
        {this.state.showPopup && <ContactMeFormPopup onClose={this.handleClosePopup} />}
      </section></>
    );
  }
}

export default ContactMe;
