// src/components/ContactMeForm.js
import React from 'react';

class ContactMeForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <div className="contact-email-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactMeForm;
