import { fetchTalents } from "../model/talentsSlice";
import { DetailedTalent } from "../model/types";
import { useFeatureData } from "@/shared/hooks/useFeatureData";

export const useTalentsViewModel = () => {
  const { data, isLoading, error } = useFeatureData<DetailedTalent[]>({
    selector: (state) => ({
      data: state.talents.talents,
      isLoading: state.talents.isLoading,
      error: state.talents.error,
    }),
    fetchAction: fetchTalents,
  });
  return { talents: data || [], isLoading, error };
};
