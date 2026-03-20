import { fetchIdentityData } from "../model/identitySlice";
import { IdentityData } from "../model/types";
import { useFeatureData } from "@/shared/hooks/useFeatureData";

export const useIdentityViewModel = () => {
  return useFeatureData<IdentityData>({
    selector: (state) => state.identity,
    fetchAction: fetchIdentityData,
  });
};
