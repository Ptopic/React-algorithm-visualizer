import { configureStore } from '@reduxjs/toolkit';
import algoSlice from './slices/algoSlice';

export default configureStore({
	reducer: {
		algo: algoSlice,
	},
});
