import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setSortingArray,
	setAlgorithm,
	setSpeed,
	startSorting,
	pauseSorting,
	resetSorting,
} from '../redux/slices/algoSlice';
import Slider from '@material-ui/core/Slider';
import './Controller.css';

import {
	convertInputToArrayString,
	convertArrayStringToArray,
	getRandomArray,
} from '../utils/helper';

import { VscDebugStart } from 'react-icons/vsc';
import { VscDebugRestart } from 'react-icons/vsc';
import { ImPause } from 'react-icons/im';

function Controller() {
	const algorithm = useSelector((state) => state.algo.algorithm);
	const sortingArray = useSelector((state) => state.algo.sortingArray);
	const speed = useSelector((state) => state.algo.speed);
	const progress = useSelector((state) => state.algo.progress);
	const dispatch = useDispatch();
	const [isPausing, setIsPausing] = useState(false);
	const [arrayInput, setArrayInput] = useState(sortingArray);

	const startElement = (
		<VscDebugStart onClick={() => dispatch(startSorting())} size={32} />
	);
	const pauseElement = (
		<ImPause onClick={() => dispatch(pauseSorting())} size={32} />
	);
	const resetElement = (
		<VscDebugRestart onClick={() => dispatch(resetSorting())} size={32} />
	);
	const disabledPauseElement = (
		<ImPause style={{ color: '#e5e5e5' }} size={32} />
	);

	function getProgressButton() {
		if (isPausing) return disabledPauseElement;

		switch (progress) {
			case 'reset':
				return startElement;
			case 'start':
				return pauseElement;
			case 'pause':
				return startElement;
			case 'done':
				return disabledPauseElement;
		}
	}

	function arrayDataChangeHandler(value) {
		const arrayString = convertInputToArrayString(value);
		setArrayInput(arrayString);

		const array = convertArrayStringToArray(arrayString);
		dispatch(setSortingArray(array));
	}

	function generate() {
		const randomArray = getRandomArray();
		setArrayInput(randomArray);
		setSortingArray(randomArray);
		resetSorting();
	}
	return (
		<div className="controller-container">
			<div className="controlls-container">
				<div className="inputs-container">
					<button onClick={() => generate()}>Generate</button>
					<input
						type="text"
						name="array"
						id="array"
						onChange={(event) => arrayDataChangeHandler(event.target.value)}
						value={arrayInput}
						style={{ margin: '0 10px' }}
					/>
				</div>
				<div className="slider-container">
					<Slider
						key={`slider-${speed}`}
						defaultValue={speed}
						onChange={(event, value) => dispatch(setSpeed(value))}
						aria-labelledby="discrete-slider"
						valueLabelDisplay="auto"
						step={1}
						marks
						min={1}
						max={10}
						color="secondary"
					/>
					<div
						style={{ display: 'flex', marginLeft: '20px', columnGap: '5px' }}
					>
						{getProgressButton()}
						{resetElement}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Controller;
