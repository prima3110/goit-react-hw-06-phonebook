import { connect } from 'react-redux';
import * as phonebookAppActions from '../../redux/phonebookApp/phonebookAppActions';
import * as phonebookAppSelectors from '../../redux/phonebookApp/phonebookAppSelectors';
import ContactFilter from './ContactFilter';

const mapStateToProps = store => ({
  value: phonebookAppSelectors.getFilter(store),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filterContact =>
    dispatch(phonebookAppActions.filterContacts(filterContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
