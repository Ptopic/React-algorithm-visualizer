// Sorting functions
import { BubbleSort } from '../sortingFunctions/BubbleSort';
import { SelectionSort } from '../sortingFunctions/SelectionSort';
import { InsertionSort } from '../sortingFunctions/InsertionSort';
import { QuickSort } from '../sortingFunctions/QuickSort';
import { MergeSort } from '../sortingFunctions/MergeSort';
// colors setting
export const primaryColor = '#EB212E';
export const comparisionColor = 'pink';
export const swapColor = 'yellow';
export const sortedColor = 'springgreen';
export const pivotColor = 'sandybrown';

// time setting
export let swapTime = 1000;
export let compareTime = 500;

// sorting algorithms
export const sortingAlgorithms = [
	{ function: BubbleSort, title: 'Bubble', name: 'BubbleSort' },
	{ function: SelectionSort, title: 'Selection', name: 'SelectionSort' },
	{ function: InsertionSort, title: 'Insertion', name: 'InsertionSort' },
	{ function: MergeSort, title: 'Merge', name: 'MergeSort' },
	{ function: QuickSort, title: 'Quick', name: 'QuickSort' },
];
