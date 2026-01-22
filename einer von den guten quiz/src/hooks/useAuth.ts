'use client';

import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useAuthStore } from './store';

export function useAuth() {
  const { user, state, setUser, setState, setLoading } = useAuthStore();
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
          });
          setState('authenticated');
        } else {
          setState('anonymous');
          setUser(null);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setState('anonymous');
      } finally {
        setLoading(false);
        setInitialCheckDone(true);
      }
    };

    if (!initialCheckDone) {
      checkAuth();
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
        });
        setState('authenticated');
      } else {
        setState('anonymous');
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [initialCheckDone, setUser, setState, setLoading]);

  return { user, state };
}

export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
