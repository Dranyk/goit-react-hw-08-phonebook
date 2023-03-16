import css from './Phonebook.module.css';
import ContactsList from './ContactsList/ContactsList';
import AddForm from './Form/Form';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { useAuth } from 'hooks/useAuth';
import { NavBar } from './NavBar/NavBar';
import { fetchContacts } from '../redux/contactsOperations';

export default function Phonebook() {
  const dispatch = useDispatch();

  // const { user } = useAuth();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div >
      <NavBar />
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <AddForm />
        <h2  className={css.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
}
