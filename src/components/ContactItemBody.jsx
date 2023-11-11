import React from 'react';
import PropTypes from 'prop-types';

function ContactItemBody({ name, tag }) {
  return(
    <div className="contact-item__body">
      <h3 className="contatc-item__title">{name}</h3>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

ContactItemBody.proptypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default ContactItemBody;