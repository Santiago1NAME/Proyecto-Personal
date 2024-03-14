import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import requestApiGet from '@/services/requestApiGet';

export default function useCookieExists() {
  const [exists, setExists] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get('token');
    const fetchData = async () => {
      const url = 'http://localhost:3002/auth/validate-token';
      const infoReq = await requestApiGet(url, {cache: 'no-store', token} );
      if(infoReq.status === 'error') {
        router.push('/auth');
        setExists(false);
      }else{
          setExists(true);
      }
    }

    fetchData();
  }, []);

  return exists;
}