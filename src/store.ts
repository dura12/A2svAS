// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { JobsApi } from './lib/service/CardServices';
export const store = configureStore({
  reducer: {
    [JobsApi.reducerPath]: JobsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(JobsApi.middleware),

   // Add RTK Query middleware
});

// Setup listeners for refetching and reconnecting
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;