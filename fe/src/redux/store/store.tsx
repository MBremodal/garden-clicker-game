// store.js
import {configureStore, createSlice} from '@reduxjs/toolkit';

// Define a slice with the initial state and reducers
const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		add: (state) => {
			state.value += 1;
		},
	},
});

// Create the Redux store
const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

// Export the actions
export const {add} = counterSlice.actions;

export default store;
