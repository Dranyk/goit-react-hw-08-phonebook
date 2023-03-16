import css from './styles.module.css';

import { Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
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
            Log In
          </button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginPage;
