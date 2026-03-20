import {
  fetchChallengesData,
  seedChallengesData,
} from "../model/challengesSlice";
import { ChallengesData } from "../model/types";
import { useFeatureData } from "@/shared/hooks/useFeatureData";
import { useAppDispatch } from "@/shared/store/hooks";

export const useChallengesViewModel = (initialData?: ChallengesData) => {
  return useFeatureData<ChallengesData>({
    selector: (state) => state.challenges,
    fetchAction: fetchChallengesData,
    seedAction: seedChallengesData,
    initialData,
  });
};
