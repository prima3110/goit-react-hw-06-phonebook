import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import popTransition from '../transitions/pop.module.css';
import appearTransition from '../transitions/appear.module.css';
import ContactCreator from './ContactCreator/ContactCreatorContainer';
import ContactList from './ContactList/ContactListContainer';
import ContactFilter from './ContactFilter/ContactFilterContainer';
import * as phonebookAppSelectors from '../redux/phonebookApp/phonebookAppSelectors';

const App = ({ contacts }) => {
  return (
    <div>
      <CSSTransition in appear timeout={500} classNames={appearTransition}>
        <h1 className={styles.title}>Phonebook</h1>
      </CSSTransition>
      <ContactCreator />
      <h2 className={styles.title}>Contacts</h2>
      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames={popTransition}
        unmountOnExit
      >
        <ContactFilter />
      </CSSTransition>
      <ContactList />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = store => ({
  contacts: phonebookAppSelectors.getContacts(store),
});

export default connect(mapStateToProps)(App);
