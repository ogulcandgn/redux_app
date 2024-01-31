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

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
  type: "song/addSong",
  payload: "New Song",
});

const finalState = store.getState();
console.log(JSON.stringify(finalState));
