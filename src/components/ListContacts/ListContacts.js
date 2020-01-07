import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ol className="contact-list">
        { this.props.contacts.map(contact => {
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

            <button className='contact-remove'>
              Remove
            </button>
          </li>)
        })}

      </ol>
    )
  }
}
ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired 
  })).isRequired
}

export default ListContacts;