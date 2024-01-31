import { configureStore, createSlice } from "@reduxjs/toolkit";

//slice is defines some initial state
const songsSlice = createSlice({
  name: "song",
  initialState: ["deneme1", "deneme2"],
  reducers: {
    addSongs(state, action) {
      state.push(action.payload);
    },
  },
  removeSong(state, action) {
    //
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export { store };
