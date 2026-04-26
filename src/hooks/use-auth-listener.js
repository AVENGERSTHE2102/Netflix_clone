import { useState, useEffect } from 'react';

export default function useAuthListener() {
  const [user, setUser] = useState(() => {
    // Clear session whenever the user is on an entry page (signup / root).
    // This enforces: every fresh visit always starts at Signup.
    const isEntryPage = ['/', '/signup'].includes(window.location.pathname);
    if (isEntryPage) {
      localStorage.removeItem('authUser');
      return null;
    }
    return JSON.parse(localStorage.getItem('authUser'));
  });

  useEffect(() => {
    // Listen for storage changes (e.g. after signup sets the token)
    const listener = () => {
      const authUser = JSON.parse(localStorage.getItem('authUser'));
      setUser(authUser);
    };
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, []);

  return { user };
}
