import css from './Phonebook.module.css';
import ContactsList from './ContactsList/ContactsList';
import AddForm from './Form/Form';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOperations';

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <AddForm />
        <h2  className={css.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
  );
}
