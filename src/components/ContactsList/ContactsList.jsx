import css from './ContactsList.module.css';
import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';


const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} phone={number} id={id} />;
      })}
    </ul>
  );
};

export default ContactsList;
