'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Button } from '@/shared/components/ui/button';
import { Label } from '@/shared/components/ui/label';
import { useLoginViewModel } from '../viewmodel/useLoginViewModel';


export const LoginForm = () => {
  const { form, isLoading, onSubmit } = useLoginViewModel();
  const { register, formState: { errors } } = form;

  return (
    <Card className="w-full max-w-md mx-auto mt-20 border-border bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Access RexMind</CardTitle>
        <CardDescription>Enter your credentials to enter your dashboard</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="theo@rexmind.com" {...register('email')} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register('password')} />
            {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pt-5">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Authenticating...' : 'Sign In'}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Don't have an account? <a href="/register" className="text-brand-accent hover:underline">Register here</a>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};
