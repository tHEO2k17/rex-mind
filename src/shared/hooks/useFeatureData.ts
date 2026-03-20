import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { RootState } from "@/shared/store/store";

export type FeatureState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

type ThunkCreator = (...args: any[]) => any;

interface UseFeatureDataOptions<T> {
  selector: (state: RootState) => FeatureState<T>;
  fetchAction: ThunkCreator;
  seedAction?: (payload: T) => any;
  initialData?: T;
}

export function useFeatureData<T>({
  selector,
  fetchAction,
  seedAction,
  initialData,
}: UseFeatureDataOptions<T>) {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(selector);

  useEffect(() => {
    if (initialData && !data && seedAction) {
      dispatch(seedAction(initialData));
      return;
    }

    if (!data && !isLoading) {
      dispatch(fetchAction());
    }
  }, [dispatch, data, isLoading, initialData, fetchAction, seedAction]);

  return { data, isLoading, error };
}
