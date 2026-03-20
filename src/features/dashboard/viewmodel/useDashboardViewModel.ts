import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { fetchDashboardData, seedDashboardData } from "../model/dashboardSlice";
import { fetchIdentityData } from "@/features/identity/model/identitySlice";
import { Insight, Talent } from "../model/types";

type DashboardInitialData = {
  talents: Talent[];
  insights: Insight[];
};

export const useDashboardViewModel = (initialData?: DashboardInitialData) => {
  const dispatch = useAppDispatch();
  const dashboard = useAppSelector((state) => state.dashboard);
  const identity = useAppSelector((state) => state.identity);

  // Synchronous client-mount hydration preventing cascade fetches
  const initialized = useRef(false);
  if (initialData && !initialized.current) {
    if (dashboard.talents.length === 0 && dashboard.insights.length === 0) {
      dispatch(seedDashboardData(initialData));
    }
    initialized.current = true;
  }

  useEffect(() => {
    // Fallback fetching mechanism for dashboard specific data
    if (
      dashboard.talents.length === 0 &&
      dashboard.insights.length === 0 &&
      !dashboard.isLoading &&
      !initialData
    ) {
      dispatch(fetchDashboardData());
    }
    // Ensure identity data is also available
    if (!identity.data && !identity.isLoading) {
      dispatch(fetchIdentityData());
    }
  }, [
    dispatch,
    dashboard.talents.length,
    dashboard.insights.length,
    dashboard.isLoading,
    identity.data,
    identity.isLoading,
    initialData,
  ]);

  // Derive identity alignment and focus
  const identityData = identity.data;
  const identityAlignment =
    identityData && identityData.goals.length > 0
      ? Math.round(
          identityData.goals.reduce((acc, goal) => acc + goal.progress, 0) /
            identityData.goals.length,
        )
      : 0;

  const dailyFocus = identityData
    ? [
        "Complete deep work session",
        "Avoid reactive tasks",
        `Embody ${identityData.traits[0] || "your highest self"} today`,
      ]
    : [
        "Complete deep work session",
        "Avoid reactive tasks",
        "Embody your highest self today",
      ];

  return {
    ...dashboard,
    identityName: identityData?.identityName || "TheoRex",
    identityAlignment,
    dailyFocus,
    isLoading: dashboard.isLoading || identity.isLoading,
  };
};
