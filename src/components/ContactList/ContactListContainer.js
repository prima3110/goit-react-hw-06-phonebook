import { connect } from 'react-redux';
import * as phonebookAppActions from '../../redux/phonebookApp/phonebookAppActions';
import * as phonebookAppSelectors from '../../redux/phonebookApp/phonebookAppSelectors';
import ContactList from './ContactList';

const mapStateToProps = store => ({
  contacts: phonebookAppSelectors.filterContacts(store),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookAppActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
