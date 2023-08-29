import store from '@/Redux/store';
import { setToken } from '@/Redux/userSlice';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const Protected = ({ children }: { children: React.ReactNode }) => {
  const cookie = cookies();
  const token = cookie.get('accessToken');
  if (!token) redirect('/auth/login');

  store.dispatch(setToken(token));
  return <>{children}</>;
};

export default Protected;
