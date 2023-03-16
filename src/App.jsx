import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Outlet } from 'react-router-dom';
import PhonebookPage from './pages/PhonebookPage';
import NavBar from './components/NavBar/NavBar';
import Loader from 'components/Loader/Loader';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import { Layout } from 'components/Layout/Layout';
import PublicRoute from 'components/PublicRoute/PublicRoute';


const App = () => {
    const dispatch = useDispatch();
    // const { isRefreshing } = useAuth();
  
    // useEffect(() => {
    //   dispatch(refreshUser());
    // }, [dispatch]);

    return (
        <Suspense fallback={<Loader />}>
      {
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            {/* <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<PhonebookPage />} />
            </Route> */}
          </Route>
            <Route path="/contacts" element={<PhonebookPage />} />
        </Routes>
      }
    </Suspense>
    )
}

export default App;