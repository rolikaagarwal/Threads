'use client'
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import {Moon} from 'lucide-react'

const DarkToggle:React.FC = ()=>{
  const {theme,setTheme} = useTheme();
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return(
    <Button variant={'outline'} size={'icon'} onClick={toggleTheme}><Moon /></Button>
  )
}

export default DarkToggle;