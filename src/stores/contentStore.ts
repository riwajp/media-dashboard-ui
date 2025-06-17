import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum Language {
  EN = "en",
  NP = "np",
}

export enum TimePeriod {
  DAILY = "Daily",
  WEEKLY = "Weekly",
  MONTHLY = "Monthly",
}

type ContentStore = {
  locale: Language;
  setLocale: (lang: Language) => void;

  period: TimePeriod;
  setPeriod: (period: TimePeriod) => void;
};

export const useContentStore = create<ContentStore>()(
  persist(
    (set) => ({
      locale: Language.EN,
      setLocale: (locale) => set({ locale }),

      period: TimePeriod.DAILY,
      setPeriod: (period) => set({ period }),
    }),
    {
      name: "content-store",
      partialize: (state) => ({
        period: state.period,
      }),
    }
  )
);
