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
import { SignupFormType } from '@/lib/types';

import { useToast } from '../ui/use-toast';
import { useState } from 'react';
import { createUser, loginUser } from '@/Redux/userSlice';
import { Card } from '../ui/card';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string(),
  fullName: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
});

export default function SignupForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<SignupFormType>({
    defaultValues: {
      username: '',
      password: '',
      fullName: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async ({ username, password,fullName }: SignupFormType) => {
    setIsLoading(true);
    try {
      await createUser({ username, password,fullName });
      router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        toast({ title: 'Signup Failed', description: err.message });
      } else {
        toast({ title: 'Signup Failed' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-76 px-14 py-14">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
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
            {isLoading ? 'Validating...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
