import { fetchCommunityData, seedCommunityData } from "../model/communitySlice";
import { CommunityData } from "../model/types";
import { useFeatureData } from "@/shared/hooks/useFeatureData";

export const useCommunityViewModel = (initialData?: CommunityData) => {
  return useFeatureData<CommunityData>({
    selector: (state) => state.community,
    fetchAction: fetchCommunityData,
    seedAction: seedCommunityData,
    initialData,
  });
};
