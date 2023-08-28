import LoginForm from "@/components/Auth/LoginForm";
import { NextPage } from "next";

const AuthPage:NextPage = ()=>{
  return(
    <div>
      <LoginForm />
    </div>
  )
}

export default AuthPage;