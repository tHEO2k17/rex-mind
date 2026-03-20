'use client';

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/shared/store/store';
import Cookies from 'js-cookie';
import { setCredentials } from '@/features/auth/model/authSlice';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);
  
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = Cookies.get('token');
      const userCookie = Cookies.get('user');
      if (token && userCookie) {
        try {
          const user = JSON.parse(userCookie);
          storeRef.current?.dispatch(setCredentials({ token, user }));
        } catch (e) {
          console.error("Failed to parse user cookie", e);
        }
      }
    }
  }, []);
  
  return <Provider store={storeRef.current}>{children}</Provider>;
}
