import { configureStore } from "@reduxjs/toolkit"

import homeSlice from "./homeSlice"

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
})
