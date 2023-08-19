import React from 'react';
import './Navbar.css';
import { AiFillGithub } from 'react-icons/ai';
import { primaryColor } from '../utils/config';
import { sortingAlgorithms } from '../utils/config';
import { useSelector, useDispatch } from 'react-redux';
import {
	setSortingArray,
	setAlgorithm,
	setAlgorithmFullName,
} from '../redux/slices/algoSlice';
function Navbar() {
	const algorithm = useSelector((state) => state.algo.algorithm);
	const dispatch = useDispatch();

	const handleAlgorithmChange = (algorithm, fullName) => {
		dispatch(setAlgorithm(algorithm));
		dispatch(setAlgorithmFullName(fullName));
	};
	return (
		<div>
			<div className="navbar-container">
				<h1>Sorting Algorithms Visualizer</h1>
				<a href="">
					<AiFillGithub size={42} color={primaryColor} />
				</a>
			</div>

			<div className="tabs-container">
				{sortingAlgorithms.map((algorithm, id) => (
					<div
						className="tab"
						key={id}
						onClick={() => handleAlgorithmChange(algorithm, algorithm.name)}
					>
						{algorithm.title}
					</div>
				))}
			</div>
		</div>
	);
}

export default Navbar;
