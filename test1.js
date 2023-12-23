
 function maskify(string) {

	if (string.length < 5 ) {
		return string;
	}

	let hashed = "";

	for (let index = 0; index < string.length; index++) {
		if ((string.length) - index > 4) {
			hashed += '#';
		} else {
			hashed += string[index];
		}
	}

	return hashed;
}

module.exports = maskify;

