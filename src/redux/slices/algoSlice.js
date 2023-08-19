import { createSlice } from '@reduxjs/toolkit';
import { compareTime, swapTime } from '../../utils/config';

export const algoSlice = createSlice({
	name: 'algo',
	initialState: {
		algorithm: {},
		algorithmFullName: '',
		sortingArray: [1, 2, 3, 4, 5],
		speed: 3,
		progress: 'reset',
		compareTime: compareTime,
		swapTime: swapTime,
	},
	reducers: {
		setSortingArray: (state, action) => {
			state.sortingArray = action.payload;
		},
		setAlgorithm: (state, action) => {
			state.algorithm = action.payload;
		},
		setAlgorithmFullName: (state, action) => {
			state.algorithmFullName = action.payload;
		},
		setSpeed: (state, action) => {
			state.speed = action.payload;
			state.swapTime = 3000 / action.payload;
			state.compareTime = 1500 / action.payload;
		},
		startSorting: (state) => {
			state.progress = 'start';
		},
		pauseSorting: (state) => {
			state.progress = 'pause';
		},
		resetSorting: (state) => {
			state.progress = 'reset';
		},
	},
});

export const {
	setAlgorithm,
	setAlgorithmFullName,
	setSortingArray,
	setSpeed,
	startSorting,
	pauseSorting,
	resetSorting,
} = algoSlice.actions;

export default algoSlice.reducer;
