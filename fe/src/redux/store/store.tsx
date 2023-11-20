// store.js
import {configureStore, createSlice} from '@reduxjs/toolkit';

// Define a slice with the initial state and reducers
const generalSlice = createSlice({
	name: 'general',
	initialState: {
		counter: 0,
		animation: false,
		currentTile: null,
	},
	reducers: {
		add: (state) => {
			state.counter += 1;
		},
		animate: (state, action) => {
			state.animation = action.payload;
		},
		setCurrentTile: (state, action) => {
			state.currentTile = action.payload;
		},
	},
});

// Create the Redux store
const store = configureStore({
	reducer: {
		general: generalSlice.reducer,
	},
});

// Export the actions
export const {add, animate, setCurrentTile} = generalSlice.actions;

export default store;
