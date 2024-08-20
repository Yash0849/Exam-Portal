// src/components/ContactMeFormPopup.js
import React from 'react';

class ContactMeFormPopup extends React.Component {
  render() {
    return (
      <div className="contact-popup">
          <p>Thank You!.</p>
          <span className="contact-closePopup" onClick={this.props.onClose}><i className="fa-solid fa-xmark"></i></span>
      </div>
    );
  }
}

export default ContactMeFormPopup;
