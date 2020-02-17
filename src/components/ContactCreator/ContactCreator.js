import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import shortid from 'shortid';
import ContactChecking from '../ContactChecking/ContactChecking';
import slideTransition from '../../transitions/slide.module.css';
import styles from './ContactCreator.module.css';
import * as localStorage from '../../services/localStorage';

class ContactCreator extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  state = {
    name: '',
    number: '',
    notification: false,
    notificationText: '',
  };

  componentDidMount() {
    const { onAddContact } = this.props;
    const contacts = localStorage.getContacts();
    if (contacts) {
      contacts.map(el => onAddContact(el));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.props;
    if (prevState.contacts !== contacts) {
      localStorage.saveContacts(contacts);
    }
  }

  addContact = e => {
    e.preventDefault();
    const { contacts, onAddContact } = this.props;
    const { name, number } = this.state;
    const existContact = contacts.some(
      contactInPhonebook => contactInPhonebook.name === name,
    );
    if (existContact) {
      this.setState({
        notification: true,
        notificationText: `Contact ${name} is already exists in your phonebook!`,
      });
      setTimeout(() => {
        this.setState({
          notification: false,
        });
      }, 2000);
      return;
    }
    if (name.trim() === '' || number.trim() === '') {
      this.setState({
        notification: true,
        notificationText: 'Please, fill all fields!',
      });
      setTimeout(() => {
        this.setState({
          notification: false,
        });
      }, 2000);
      return;
    }
    const contactToAdd = {
      name,
      number,
      id: shortid.generate(),
    };
    onAddContact(contactToAdd);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, number, notification, notificationText } = this.state;

    return (
      <div>
        <form className={styles.form} onSubmit={this.addContact}>
          <label className={styles.label} htmlFor="name">
            Name
            <input
              id="name"
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label} htmlFor="number">
            Number
            <input
              id="number"
              className={styles.input}
              type="number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={styles.button}>
            Add contact
          </button>
          <CSSTransition
            in={notification}
            timeout={2500}
            classNames={slideTransition}
            unmountOnExit
          >
            <ContactChecking notificationText={notificationText} />
          </CSSTransition>
        </form>
      </div>
    );
  }
}

export default ContactCreator;
