import React, { useState, useEffect } from 'react';
import './DisplayAlgo';
import { useSelector, useDispatch } from 'react-redux';

function DisplayAlgo() {
	const algorithmFullName = useSelector(
		(state) => state.algo.algorithmFullName
	);
	return (
		<div>
			<h3>{algorithmFullName}</h3>
		</div>
	);
}

export default DisplayAlgo;
