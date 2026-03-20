import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../model/schemas';
import { LoginDTO } from '../model/types';
import { loginThunk } from '../model/authSlice';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useLoginViewModel = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const form = useForm<LoginDTO>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginDTO) => {
    const resultAction = await dispatch(loginThunk(data));
    
    if (loginThunk.fulfilled.match(resultAction)) {
      toast.success('Successfully logged in');
      router.push('/dashboard');
    } else {
      toast.error(resultAction.payload as string || 'Login failed');
    }
  };

  return { form, isLoading, onSubmit: form.handleSubmit(onSubmit) };
};
