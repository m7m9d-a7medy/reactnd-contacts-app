import React from 'react';
import PropTypes from 'prop-types';

const ListContacts = (props) => {
  return (
    <ol className="contact-list">
      { props.contacts.map(contact => {
      return (
        <li key={contact.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}
          ></div>

          <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
          </div>

          <button
            className='contact-remove'
            onClick={() => props.onDeleteContact(contact)}
          >
            Remove
          </button>
        </li>)
      })}

    </ol>
  )
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired 
  })).isRequired
}

export default ListContacts;