'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const HeaderFooterToggle = ({ children }) => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
    console.log(pathname)
  }, [pathname]);

  const hideHeaderFooterRoutes = ['/auth/login', '/userLogin', '/recovery', '/auth/instituteLogin', '/auth/lecturerLogin', '/auth/studentLogin'];

  const isHidden = hideHeaderFooterRoutes.includes(currentPath);

  return (
    <>
      {!isHidden && <Header />}
      {children}
      {!isHidden && <Footer />}
    </>
  );
};

export default HeaderFooterToggle;