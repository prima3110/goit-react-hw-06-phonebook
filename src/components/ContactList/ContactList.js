import React from 'react';

import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import slideTransition from '../../transitions/slide.module.css';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) =>
  contacts.length > 0 && (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(contact => {
        return (
          <CSSTransition
            key={contact.id}
            timeout={250}
            classNames={slideTransition}
            unmountOnExit
          >
            <li>
              <Contact
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...contact}
                onDeleteContact={() => onDeleteContact(contact.id)}
              />
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactList;
