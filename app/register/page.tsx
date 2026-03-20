import { RegisterForm } from '@/features/auth/view/RegisterForm';

export const metadata = {
  title: 'Initialize | RexMind',
  description: 'Provision your cognitive operating system',
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <RegisterForm />
    </main>
  );
}
