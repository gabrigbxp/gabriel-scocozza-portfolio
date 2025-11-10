import { createSlice } from '@reduxjs/toolkit'

export const jsDosSlice = createSlice({
  name: 'jsDos',
  initialState: {
    isFullscreen: false,
  },
  reducers: {
    toggleFullscreen: (state) => ({
      ...state,
      isFullscreen: !state.isFullscreen,
    }),
  },
})

export const { toggleFullscreen } = jsDosSlice.actions

export default jsDosSlice.reducer
