'use client';
 
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useAuthStore from '../stores/auth';
 
export function NavigationEvents() {
  const pathname = usePathname();
  const { currentPath, setCurrentPath } = useAuthStore();
 
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname, setCurrentPath]);
 
  return null;
}
