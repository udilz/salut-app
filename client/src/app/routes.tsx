import { Login } from '@/features/authentication/components/login';
import { Layout } from '@/features/components/layout';
import { LandingPage } from '@/features/landing-page/components';
import { Registrasion } from '@/features/registrasion/components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/pendaftaran" element={<Registrasion />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
