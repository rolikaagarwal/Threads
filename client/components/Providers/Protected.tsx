import store from '@/Redux/store';
import { setToken } from '@/Redux/userSlice';
import { cookies } from 'next/headers'
const Protected=({children}:{children:React.ReactNode})=>{
  
  const cookie = cookies();
  const token = cookie.get('accessToken');
  
  if(token){
    store.dispatch(setToken(token));
    return <>{children}</>
  }
  return <div>No</div>
}

export default Protected;