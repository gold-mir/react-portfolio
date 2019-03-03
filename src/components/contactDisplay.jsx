import React from 'react';
import PropTypes from 'prop-types';


function ContactDisplay(props){

  return (
    <div>
      <h4>Contact Me!</h4>
      {props.contactInfo.map((contact, key) =>
        <p key={key}>{contact.type}: {contact.value}</p>
      )}
    </div>)
}

ContactDisplay.propTypes = {
  contactInfo: PropTypes.arrayOf(PropTypes.object)
}

export default ContactDisplay;