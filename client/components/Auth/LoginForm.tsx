'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { LoginFormType } from '@/lib/types';

import { useToast } from '../ui/use-toast';
import { useState } from 'react';
import { loginUser } from '@/Redux/userSlice';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string()
});


export default function LoginForm() {
  const router = useRouter();
  const {toast} = useToast();
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const form = useForm<LoginFormType>({
    defaultValues:{
      username:'',
      password:''
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async({username,password}:LoginFormType)=>{
    setIsLoading(true);
    try{
      await loginUser({username,password});
      router.push('/');
    } catch(err){
      if(err instanceof Error){
        toast({title:"Login Failed",description:err.message})
      }else{
        toast({title:"Login Failed"});
      }
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading?'Validating...':'Submit'}
          </Button>
      </form>
    </Form>
  );
}
