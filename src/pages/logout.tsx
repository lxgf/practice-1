import {useRouter} from "next/router";
import {useEffect} from 'react';
import {saveToStorage} from '@/utils/localStorage';

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    saveToStorage('isAuthenticated', false)
    router.push('/')
  }, []);
}