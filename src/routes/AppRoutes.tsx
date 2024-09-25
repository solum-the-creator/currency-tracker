import { MainLayout } from '@components/layout/MainLayout';
import { UrlPaths } from '@constants/paths';
import { BankCard } from '@pages/BankCard';
import { Contact } from '@pages/Contact';
import { Home } from '@pages/Home';
import Timeline from '@pages/Timeline';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={UrlPaths.HOME} element={<Home />} />
        <Route path={UrlPaths.TIMELINE} element={<Timeline />} />
        <Route path={UrlPaths.BANK_CARD} element={<BankCard />} />
        <Route path={UrlPaths.CONTACT} element={<Contact />} />
        <Route path="*" element={<Navigate to={UrlPaths.HOME} />} />
      </Routes>
    </MainLayout>
  );
};
