import { useCallback } from "react";
import {
  fetchMentorData,
  addUserMessage,
  sendMessage,
} from "../model/mentorSlice";
import { MentorData } from "../model/types";
import { useFeatureData } from "@/shared/hooks/useFeatureData";
import { useAppDispatch } from "@/shared/store/hooks";

export const useMentorViewModel = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useFeatureData<MentorData>({
    selector: (state) => state.mentor,
    fetchAction: fetchMentorData,
  });

  const sendNewMessage = useCallback(
    (content: string) => {
      dispatch(addUserMessage(content));
      dispatch(sendMessage(content));
    },
    [dispatch],
  );

  return { data, isLoading, error, sendNewMessage };
};
