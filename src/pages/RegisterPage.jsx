import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperations';
import { Box } from '@mui/material';

import css from './styles.module.css';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const initialValues = {
      name: '',
      email: '',
      password: '',
    };
  
    const handleSubmit = ({ name, email, password }, { resetForm }) => {
      dispatch(registration({ name, email, password }));
      resetForm();
    };
    return (
        <Box
        margin={1}
        marginLeft="auto"
        marginRight="auto"
        width="400px"
        boxShadow={
          ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
        }
        backgroundColor="#ffff"
        borderRadius="5px"
      >
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <label className={css.formElement} htmlFor="name">
              <span>Name</span>
              <Field className={css.input} type="text" name="name" required />
            </label>
            <label className={css.formElement} htmlFor="email">
              <span>Email</span>
              <Field className={css.input} type="email" name="email" required />
            </label>
            <label className={css.formElement} htmlFor="password">
              <span>Password</span>
              <Field
                className={css.input}
                type="password"
                name="password"
                required
              />
            </label>
            <button className={css.btn} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </Box>
    );
  };
  
  export default RegisterPage;