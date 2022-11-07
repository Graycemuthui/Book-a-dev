import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {

  return (
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/developers" element={<Outlet />}>
              <Route index element={<Developers />} />
              <Route path=":id" element={<Outlet />}>
                <Route index element={<DeveloperDetails />} />
              </Route>
            </Route>
            <Route path="/developers/new" element={<CreateDeveloper />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/bookings/new" element={<CreateBooking />} />
            <Route path="*" element={<Developers />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
};

export default App;
