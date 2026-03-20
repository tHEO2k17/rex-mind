import { fetchInsightsData, seedInsightsData } from "../model/insightsSlice";
import { InsightsData } from "../model/types";
import { useFeatureData } from "@/shared/hooks/useFeatureData";

export const useInsightsViewModel = (initialData?: InsightsData) => {
  return useFeatureData<InsightsData>({
    selector: (state) => state.insights,
    fetchAction: fetchInsightsData,
    seedAction: seedInsightsData,
    initialData,
  });
};
