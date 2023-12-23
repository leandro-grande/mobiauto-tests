function checkIfTheFirstLetterIsUppercase(word) {
	const regex = /^[A-Z]/;

   return regex.test(word);
}

module.exports = checkIfTheFirstLetterIsUppercase;