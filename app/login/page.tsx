import { LoginForm } from '@/features/auth/view/LoginForm';

export const metadata = {
  title: 'Login | RexMind',
  description: 'Access your cognitive operating system',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <LoginForm />
    </main>
  );
}
