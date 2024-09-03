import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "types";

type BookedSession = Omit<Session, "image" | "description">;

type BookedSessionSlice = {
  items: BookedSession[];
};

const initialState: BookedSessionSlice = {
  items: [],
};

const bookedSessions = createSlice({
  name: "bookedSessions",
  initialState,
  reducers: {
    addSession: (state, action: PayloadAction<BookedSession>) => {
      state.items.push(action.payload);
    },
    removeSession: (state, action: PayloadAction<string>) => {
      const findIndex = state.items.findIndex((el) => el.id === action.payload);

      if (findIndex > -1) state.items.splice(findIndex, 1);
    },
  },
});

export const bookedSessionsReducer = bookedSessions.reducer;
export const { addSession, removeSession } = bookedSessions.actions;
