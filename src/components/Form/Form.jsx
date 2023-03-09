import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { Formik, Form, Field } from 'formik';
import { getIsLoading } from 'redux/selectors';

const AddForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const initialValues = {
    name: '',
    phone: '',
  };

  const handleFormSubmit = (contact, { resetForm }) => {
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      <Form className={css.phonebook}>
        <label>
          <p>Name</p>
          <Field type="text" name="name" />
        </label>
        <label>
          <p>Number</p>
          <Field type="tel" name="phone" />
        </label>
        <button className={css.button} type="submit" disabled={isLoading}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default AddForm;
