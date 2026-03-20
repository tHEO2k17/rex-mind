import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { fetchMentorData, addUserMessage, sendMessage } from '../model/mentorSlice';

export const useMentorViewModel = () => {
  const dispatch = useAppDispatch();
  const mentor = useAppSelector((state) => state.mentor);

  useEffect(() => {
    if (!mentor.data && !mentor.isLoading) {
      dispatch(fetchMentorData());
    }
  }, [dispatch, mentor.data, mentor.isLoading]);

  const sendNewMessage = useCallback((content: string) => {
    dispatch(addUserMessage(content));
    dispatch(sendMessage(content));
  }, [dispatch]);

  return { ...mentor, sendNewMessage };
};
