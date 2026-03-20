import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '../model/schemas';
import { RegisterDTO } from '../model/types';
import { registerThunk } from '../model/authSlice';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useRegisterViewModel = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const form = useForm<RegisterDTO>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  const onSubmit = async (data: RegisterDTO) => {
    const resultAction = await dispatch(registerThunk(data));
    
    if (registerThunk.fulfilled.match(resultAction)) {
      toast.success('Account created successfully');
      router.push('/dashboard');
    } else {
      toast.error(resultAction.payload as string || 'Registration failed');
    }
  };

  return { form, isLoading, onSubmit: form.handleSubmit(onSubmit) };
};
