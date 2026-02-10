import { Outlet } from 'react-router';
import { BackToTopButton } from './BackToTopButton';

export function RootLayout() {
  return (
    <>
      <Outlet />
      <BackToTopButton />
    </>
  );
}