import { connect } from 'react-redux';
import * as phonebookAppActions from '../../redux/phonebookApp/phonebookAppActions';
import * as phonebookAppSelectors from '../../redux/phonebookApp/phonebookAppSelectors';
import ContactCreator from './ContactCreator';

const mapStateToProps = store => ({
  contacts: phonebookAppSelectors.getContacts(store),
});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(phonebookAppActions.saveContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreator);
