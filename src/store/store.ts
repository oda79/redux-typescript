import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { bookedSessionsReducer } from "./booked-sessions-slice";

const store = configureStore({
  reducer: {
    bookedSessions: bookedSessionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch<AppDispatch>;
