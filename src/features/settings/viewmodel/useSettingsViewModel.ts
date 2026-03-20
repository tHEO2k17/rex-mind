import { fetchSettings, updateSettings } from "../model/settingsSlice";
import { SettingsData } from "../model/types";
import { useFeatureData } from "@/shared/hooks/useFeatureData";
import { useAppDispatch } from "@/shared/store/hooks";

export const useSettingsViewModel = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useFeatureData<SettingsData>({
    selector: (state) => state.settings,
    fetchAction: fetchSettings,
  });

  const saveSettings = (newData: Partial<SettingsData>) => {
    dispatch(updateSettings(newData));
  };

  return {
    data,
    isLoading,
    error,
    saveSettings,
  };
};
