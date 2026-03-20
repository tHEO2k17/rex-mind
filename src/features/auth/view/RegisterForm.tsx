'use client';

import { useRegisterViewModel } from '../viewmodel/useRegisterViewModel';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Label } from '@/shared/components/ui/label';

export const RegisterForm = () => {
  const { form, isLoading, onSubmit } = useRegisterViewModel();
  const { register, formState: { errors } } = form;

  return (
    <Card className="w-full max-w-md mx-auto mt-20 border-border bg-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Initialize RexMind</CardTitle>
        <CardDescription>Setup your cognitive operating system</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="Theophilus Rex" {...register('name')} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
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
            {isLoading ? 'Provisioning...' : 'Create Account'}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account? <a href="/login" className="text-brand-accent hover:underline">Sign In</a>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};
