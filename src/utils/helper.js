export function convertInputToArrayString(str) {
	str = str.replaceAll(/\s/g, '');
	str = str.replaceAll(/\d{4}/g, '');
	str = str.replaceAll(/\s\s/g, ' ');
	str = str.replaceAll(/\s,/g, ',');
	str = str.replaceAll(/,,/g, ',');
	str = str.replaceAll(/[^0-9,\s]/g, '');
	return str;
}

export function convertArrayStringToArray(string) {
	return string
		.split(',')
		.filter((v) => v !== '')
		.map((v) => +v);
}

function generateRandomNumberInRange(lowerLimit = 0, upperLimit = 999) {
	return lowerLimit + Math.floor(Math.random() * upperLimit);
}

export function getRandomArray(length = generateRandomNumberInRange(5, 30)) {
	return Array.from(new Array(length), () => generateRandomNumberInRange());
}

export function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
