import { configureStore } from '@reduxjs/toolkit';

import { awardsReducer } from './awards';

export const store = configureStore({
  reducer: {
    awards: awardsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: { warnAfter: 100 },
    }),
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type AsyncThunkConfig = {
  state?: TRootState;
};

export { getCategories, submitVotes } from './awards';
